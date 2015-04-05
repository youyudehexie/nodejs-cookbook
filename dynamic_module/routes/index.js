var express = require('express');
var router = express.Router();

var loadDir = require('../load_dir');

var Controller = loadDir('controllers');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/a', Controller.a.index);
router.get('/b', Controller.b.index);

module.exports = router;
