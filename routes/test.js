var express = require('express');
var router = express.Router();
var db = require('./firebase')
var data;

router.get('/api/test', (req, res) => {
	var testRef = db.collection('Test').doc('ChapterTest');
	var getDoc = testRef.get()
		.then(doc => {
			if (!doc.exists) {
				res.statusCode = 400;
				res.send({
					message: 'Document no such'
				})
			} else {
				res.statusCode = 200;
				res.send(doc.data());
			}
		})
		.catch(err => {
			console.log('Error getting document:', err);
		});
});

module.exports = router
