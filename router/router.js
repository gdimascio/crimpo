
const {Router} = require ("express");
const router = new Router();

const mysql = require("mysql");

// Conexion a base de datos
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crimpo"
})

conn.connect((err) => {
    if(err) throw err;
    console.log("CONEXION ESTABLECIDA");
})

// SELECT
router.get("/", (req, res) => {
    res.render("../views/home.hbs", {})
})
router.get("/iphones.html", (req, res) => {
    let sql = "SELECT * FROM iphone";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render("../views/iphones.hbs", {results:results})
    })
})




module.exports = router;