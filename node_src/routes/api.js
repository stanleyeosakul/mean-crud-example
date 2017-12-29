const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book.js');

// API ROOT ROUTE
router.get('/', (req, res) => {
    res.status(200).json({ status: 200, result: 'success' });
});

// GET ALL BOOKS 
router.get('/book', (req, res, next) => {
    Book.find((err, products) => (err) ? next(err) : res.json(products));
});

// GET A BOOK
router.get('/book/:id', (req, res, next) => {
    Book.findById(req.params.id, (err, post) => (err) ? next(err) : res.json(post));
});

// SAVE A BOOK
router.post('/book', (req, res, next) => {
    Book.create(req.body, (err, post) => (err) ? next(err) : res.json(post));
});

// UPDATE BOOK
router.put('/book/:id', (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err, post) => (err) ? next(err) : res.json(post));
});

// DELETE A BOOK
router.delete('/book/:id', (req, res, next) => {
    Book.findByIdAndRemove(req.params.id, req.body, (err, post) => (err) ? next(err) : res.json(post));
});

module.exports = router;