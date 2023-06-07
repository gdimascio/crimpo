
const {Router} = require ("express");
const router = new Router();

const mysql = require("mysql");

// Conexion a base de datos
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crimpo"
});

conn.connect((err) => {
    if(err) throw err;
    console.log("CONEXION ESTABLECIDA");
});

// SELECT
router.get("/", (req, res) => {
    let sql = "SELECT * FROM categorias";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render("../views/home.hbs", {results:results})
    })
});
router.get("/iphones.html", (req, res) => {
    let sql = "SELECT * FROM iphones";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render("../views/iphones.hbs", {results:results})
    })
});
router.get("/admin", (req, res) => {
    let sql = "SELECT * FROM categorias";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render("../views/admin.hbs", {results:results})
    })
});

// SELECT CATEGORIA
router.post("/cargar", async(req, res) => {
    const categoria = req.body.categorias;
    // console.log (categoria);

    let sql = "SELECT * FROM " + categoria;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render("../views/admin_cargar.hbs", {results:results})
    });
});

// SELECT PRODUCTO
router.post("/editar", async(req, res) => {
    const categoria = req.body.categorias;
    // console.log (categoria);

    let sql = "SELECT * FROM " + categoria;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render("../views/admin_editar.hbs", {results:results})
    });
});

// INSERTAR PRODUCTO
router.post("/cargarProducto", (req, res) => {
    let data = { modelo: req.body.modelo, tamano: req.body.tamano, precio: req.body.precio };
    let sql = "INSERT INTO iphones SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect("/admin");
    });
});

// BORRAR PRODUCTO
router.post('/delete',(req, res) => {
    let sql = "DELETE FROM iphones WHERE id="+req.body.id+"";
    let query = conn.query(sql, (err, results) => {
    if(err) throw err;
        res.redirect('/admin');
    });
    // console.log(sql);
    // res.redirect('/admin');
});


module.exports = router;