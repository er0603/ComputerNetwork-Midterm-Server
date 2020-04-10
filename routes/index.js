var express = require('express');
var router = express.Router();

// GET: /
router.get('/', function(req, res, next) {
    res.send({ message: "Something wrong, maybe the URL you are accessing is incorrect?" });
    console.log(req);
});

// GET: /get
router.get('/get', function(req, res, next) {
    res.send({ message: "hello World!" });
    console.log(req);
});

// GET: /post
router.get('/post', function(req, res, next) {
    res.send({ message: "Something wrong, this routes only accept HTTP POST!" });
    console.log(req);
});

// POST: /post
router.post('/post', function(req, res, next) {
    console.log(req.body);
    if (req.body.StuId != null) {
        var StuId = req.body.StuId
        res.send({ message: "Hello! " + StuId });
    } else {
        res.send({ message: "Invalid message!" });
    }

});
module.exports = router;