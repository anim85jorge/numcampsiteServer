const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the partners to you');
    })
    .post((req, res) => {
        res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /partners');
    })
    .delete((req, res) => {
        res.end('Deleting all partners');
    });
partnerRouter.route('/:partnerId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send all the partners to you`)
    })
    .post((req, res) => {
        res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description} with an ID: ${req.params.partnerId}`);
    })
    .put((req, res) => {
        res.statusCode = 200;
        res.end(`Updating the Partner: ${req.params.partnerId} Will update the Partner: ${req.body.name} with the Description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end('Deleting all partners');
    });

module.exports = partnerRouter;