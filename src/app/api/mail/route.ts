
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server"; 

export async function POST(request:Request ){
  const data = await request.json();
    
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ecommerceparcelas@gmail.com',
      pass: 'ebsaiiorklbybvzn',
    },
  });

    const mailOptions = {
    from: 'valderramaiangael@gmail.com',
    to: 'percy.u.lomas@gmail.com',
    subject: 'Mensaje del portafolio de contacto',
    text: `Nombre: ${data.name}\nCorreo Electrónico: ${data.email}\nMensaje: ${data.message}`,
  };

  
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo electrónico enviado: ' + info.response);
      
      // Usar la respuesta del servidor Next.js para enviar una respuesta JSON exitosa
      return NextResponse.json({ message: 'Correo electrónico enviado correctamente' });
    } catch (error) {
      console.error(error);
      
      // Usar la respuesta del servidor Next.js para enviar una respuesta JSON de error
      return NextResponse.json({ error: 'Error al enviar el correo electrónico' }, { status: 500 });
    }
  
     

 
}