var express = require('express');
var router = express.Router();
var db = require('./firebase')


router.get('/api/test', (req, res) => {
	var testRef = db.collection('Test').doc('ChapterTest');
	var data = 'Hola';
	var getDoc = testRef.get()
		.then(doc => {
			if (!doc.exists) {
				console.log('Document no such;')
			} else {
				console.log('Document data: ', doc.data());
				data = doc.data();
			}
		})
		.catch(err => {
			console.log('Error getting document:', err);
		});
		res.send({
			message: 'Sucess',
			data
		})
});

module.exports = router
