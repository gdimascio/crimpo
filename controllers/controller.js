
// CONEXION A FIREBASE
const async = require("hbs/lib/async");
const db = require ("../firebase/firebase");

// CARGA DE COLECCIONES
const catalogoCollection = db.collection("catalogo");
const iphoneCollection = db.collection("iphone");
function getCollection(producto){return db.collection(producto)}

const controller = {
        //LIST CATALOGO
        listCatalogo: async(req, res) => {
            const catalogoSnapshot = await catalogoCollection.get();
            const catalogo = catalogoSnapshot.docs.map(doc => ({
                id: doc.id, 
                ...doc.data()
            }))
            res.render("home", {catalogo})
        },

        //LIST PRODUCTOS
        listProductos: async(req, res) => {
            const productoNombre = req.params.nombre;
            const productoCollection = getCollection(productoNombre);
            const productoSnapshot = await productoCollection.get();
            const producto = productoSnapshot.docs.map(doc => ({
                id: doc.id, 
                ...doc.data()
            }))
            res.render(productoNombre, {producto})
        },

        //LIST ADMIN
        listAdmin: async(req, res) => {
            const catalogoSnapshot = await catalogoCollection.get();
            const catalogo = catalogoSnapshot.docs.map(doc => ({
                id: doc.id, 
                ...doc.data()
            }))
            res.render("admin", {catalogo})
            // console.log(catalogo)
        },


        // SELECT CATEGORIA
        cargar: async(req, res) => {
            const categoria = req.body.categorias;
            const productoCollection = getCollection(categoria);
            const productoSnapshot = await productoCollection.get();
            const producto = productoSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            res.render("admin_cargar", {categoria})  
            // esto redireccionó a admin_cargar pasandole toda la lista de *producto*
        },
        cargarProducto: async(req, res) => {
            const {modelo, tamano, precio} = req.body;
            const categoria = req.body.cat;
            const newProducto = {modelo, tamano, precio};
            const productoCollection = getCollection(categoria);
            await productoCollection.add(newProducto);
            res.redirect("/admin");
        },

        editar: async(req, res) => {
            const productoNombre = req.body.categorias;
            const productoCollection = getCollection(productoNombre);
            const productoSnapshot = await productoCollection.get();
            const producto = productoSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            res.render("admin_editar", {producto, productoNombre})  
        },

        borrar:async(req, res) => {
            const dlteId = req.body.id;
            const categoria = req.body.cat;
            const productoCollection = getCollection(categoria);
            await productoCollection.doc(dlteId).delete();
            res.redirect("admin");
        },

        editarProducto: async(req, res) => {
            const id = req.body.id;
            const {modelo, tamano, precio} = req.body;
            const editProducto = {modelo, tamano, precio};
            const categoria = req.body.cat;
            const productoCollection = getCollection(categoria);
            await productoCollection.doc(id).update(editProducto);
            res.redirect("admin");
        }
}

module.exports = controller;