
const admin = require ("firebase-admin");

const serviceAccount = require("../crimpo-79cbe-firebase-adminsdk-pp8q2-a9e3f3137e.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;