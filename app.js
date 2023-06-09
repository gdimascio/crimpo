
const express = require("express");
const app = express();
const port = 3000;

const hbs = require("hbs");
const router = require ('./router/router')

// HBS
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// MIDDLEWARE
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));


app.use("/", router);
// app.use("/admin", adminRouter);




app.get("*", function(req, res){res.send("ERROR 404")})
app.listen(port , () => {
    console.log("usando el puerto http://localhost:" + port);
})
