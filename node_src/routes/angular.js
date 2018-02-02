// How to bind Angular to NodeJS
const path = require('path');
const express = require('express');
const router = express.Router();

const angularBuildPath = path.join(__dirname, '../../dist');
router.use(express.static(angularBuildPath));

router.get('*', function (req, res, next) {
    if (req.url.startsWith('/api')) return next();
    res.sendFile(`${angularBuildPath}/index.html`);
});

module.exports = router;