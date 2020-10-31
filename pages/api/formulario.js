const {isEmpty, isEmail} = require('validator');
const nodemailer = require('nodemailer');

export default async (req, res) => {
  const {method} = req;

  if(method === 'POST'){
    const {nombre, correo, telefono, descripcion} = req.body;

    if(isEmpty(nombre) || isEmpty(correo) || isEmpty(telefono) || isEmpty(descripcion)){
      res.send({error: true, message: 'Complete todos los campos'});
    } else {
      if(!isEmail(correo)){
        res.send({error: true, message: 'Ingrese un correo válido'});
      } else {

        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com", 
          secure: true,
          port: 465, 
          auth: {
              user: 'pereznikoldesign@gmail.com',
              pass: '211197noviembre'
          }
        })

        const mailOption = {
          from: 'pereznikoldesign@gmail.com',
          to: 'armando_cierra@outlook.com',
          subject: 'test',
          html: `<h1>This is a test ${nombre}</h1><p>your email is: ${correo}</p>`
        }

        try{
          await transporter.sendMail(mailOption);
          res.send({error: false, message: 'Correo Enviado'});
        } catch(error){
          res.send({error: true, message: error})
        }
      }
    }
  }
}