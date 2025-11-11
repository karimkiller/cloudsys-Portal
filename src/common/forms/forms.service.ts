import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'


@Injectable()
export class FormsService {
constructor(private prisma: PrismaService) {}


create(templateId: string, payload: any, filledById?: string) {
return this.prisma.formSubmission.create({ data: { templateId, payload, status: 'SUBMITTED', filledById } })
}


async generatePdf(payload: any) {
const pdfDoc = await PDFDocument.create()
const page = pdfDoc.addPage([612, 792])
const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
const draw = (text: string, y: number) => page.drawText(text, { x: 40, y, size: 12, font, color: rgb(0,0,0) })
let y = 760
draw('CloudSys — Client Onsite Visit Request', y); y -= 24
for (const [k, v] of Object.entries(payload)) { draw(`${k}: ${typeof v==='object'?JSON.stringify(v):String(v)}`.slice(0,110), y); y-=16; if (y<50) { y=760; pdfDoc.addPage([612,792]) } }
const bytes = await pdfDoc.save()
return `data:application/pdf;base64,${Buffer.from(bytes).toString('base64')}`
}
}