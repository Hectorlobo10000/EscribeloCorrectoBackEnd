var admin = require('firebase-admin');
var serviceAccount = require('./path/to/escribelocorrecto-22ec4-firebase-adminsdk-zm9k8-1275772872.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;
