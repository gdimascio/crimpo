
// SESIONES
const session = require("express-session");
const db = require ("../firebase/firebase");

module.exports = function configureSession (app){
    app.use(session({
        secret: "123456",
        resave: false,
        saveUninitialized: false
        // cookie:{
        //     expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // expiracion en una semana
        // }
    }));

    // Middleware - verificar conexion
    app.use ((req,res, next) => {
        req.db = db;
        next();
    })

}

