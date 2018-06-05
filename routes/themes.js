var express = require('express');
var router = express.Router();
var db = require('./firebase');

router.get('/api/chapters/:chapter/themes/:theme', (req, res) => {
  var chapterRef = db.collection('Chapter' + req.params.chapter).doc('Theme' + req.params.theme);
  var getTheme = chapterRef.get()
    .then(doc => {
      if(!doc.exists) {
        res.statusCode = 400;
        res.send({
          message: 'Document no such!'
        });
      } else {
        res.statusCode = 200;
        res.send(doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
});

module.exports = router;
