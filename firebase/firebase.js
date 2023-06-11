
const admin = require ("firebase-admin");

const serviceAccount = require("../crimpo-79cbe-firebase-adminsdk-pp8q2-a71f59cd66.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;