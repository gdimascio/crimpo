
// CONEXION A FIREBASE
const db = require ("../firebase/firebase");

// CARGA DE COLECCIONES
const catalogoCollection = db.collection("catalogo");
// function getCollection(producto){return db.collection(producto)}

const controller = {
    // ADMIN
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