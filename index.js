
require("dotenv").config();

const express = require("express");

const app = express();

const hbs = require("hbs");
const router = require ('./router/router')
const routerAdmin = require ('./router/routerAdmin')
const routerSessions = require("./router/routerSessions");
const routerMail = require("./router/routerMail");

const configureSession = require ("./router/sessions");
configureSession(app);

// HBS
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// MIDDLEWARE
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));


// app.use("/admin", routerAdmin);
// app.use("/routerAdmin", routerAdmin);
app.use("/admin", routerSessions);
app.use("/enviar", routerMail);
app.use("/", router);


const port = process.env.PORT || 3001;
app.get("*", function(req, res){res.send("ERROR 404")})
app.listen(port , () => {
    console.log("usando el puerto http://localhost:" + port);
})

