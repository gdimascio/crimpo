
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
        }

}

module.exports = controller;