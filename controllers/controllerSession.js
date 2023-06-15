
const async = require("hbs/lib/async");
const db = require ("../firebase/firebase");
const sesionesCollection = db.collection("sesiones");

const controller = {
    nose: (req, res) => {
        res.render("login");
    },

    login: async(req, res) => {
        const { username, password } = req.body;
        try {
            const sesionesSnapshot = await sesionesCollection.get();
            let authenticated = false;
            sesionesSnapshot.forEach((doc) => {
                const sessionData = doc.data();
                if (sessionData.user === username && sessionData.pass === password){
                    authenticated = true;
                }
            });

            if (authenticated) {
                // console.log("Login successful")
                res.redirect("/routerAdmin/adminlogin");
            } else {
                res.send ("Usuario invalido");
            }

        } catch (error) {
            res.send ("Parece que hubo un error");
        }
    }
}

module.exports = controller;
