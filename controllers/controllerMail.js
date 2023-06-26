
const db = require ("../firebase/firebase");
const nodemailer = require('nodemailer');

const carritoCollection = db.collection("carrito");


exports.carritoEnviar = async(req, res) => {
    res.render("formulario")
}

exports.carritoSend = async(req, res) => {
    const {nombre, email, telefono} = req.body;

    const carritoSnapshot = await carritoCollection.get();
    const carrito = carritoSnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
    }))
    const carritoString = carrito.map(item => 
        `Modelo: ${item.modelo_producto}
        Tamaño: ${item.tamano_producto} GB
        Precio: U$D ${item.precio_producto}
        Cantidad: ${item.cantidad} \n`
        ).join('\n');

    // Configurar transportador SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'taya0@ethereal.email',
            pass: 'JN8K1Z4wWcAXmvQcWK'
            },
        tls: {
            rejectUnauthorized: false
        }
    });

    // Configurar correo electronico
    const mailOptions = {
        from: email,
        to: 'guido.dimascio@gmail.com',
        subject: 'Formulario de Carrito',
        text: `CONTACTO
        Nombre: ${nombre}
        Email: ${email}
        Telefono: ${telefono}
        
        CARRITO \n
        ${carritoString}
        `
    };

    try{
        // Enviar correo
        await transporter.sendMail(mailOptions);
        res.redirect("/");
    } catch(error){
        console.log(error)
        res.redirect("/formulario", {error: "Error al enviar mensaje."})
    }



}

