
// CONEXION A FIREBASE
const db = require ("../firebase/firebase");

// CARGA DE COLECCIONES
const catalogoCollection = db.collection("catalogo");
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
            console.log(catalogo)
        }
        



}


module.exports = controller;