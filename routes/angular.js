// How to bind Angular to NodeJS
const path = require('path');
const express = require('express');
const router = express.Router();

var angularBuildPath = path.resolve(__dirname, '../dist');
router.use(express.static(angularBuildPath));

router.get('*', function (req, res, next) {
    if (req.url.startsWith('/api')) return next();
    res.sendFile(path.join(angularBuildPath, 'index.html'))
});

module.exports = router;