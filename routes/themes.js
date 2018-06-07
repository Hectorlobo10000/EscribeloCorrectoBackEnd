var express = require('express');
var router = express.Router();
var db = require('./firebase');

router.get('/api/chapters/:chapter/themes/:theme', (req, res) => {
  var chapterRef = db.collection('Chapter' + req.params.chapter).doc('Theme' + req.params.theme);
  var getTheme = chapterRef.get()
    .then(doc => {
      if(!doc.exists) {
        res.status(500).json({
          message: 'Document no such!'
        });
      } else {
        res.status(200).json(doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
});

module.exports = router;
