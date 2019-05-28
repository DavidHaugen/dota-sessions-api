const express = require('express');
const matchRouter = express.Router();
const { requireAuth } = require('../middleware/jwt-auth');
const matchService = require('./match-service');
const jsonBodyParser = express.json();


matchRouter
  .use(requireAuth)
  .get('/', (req, res, next) => {
    return matchService.getRecentMatchInfo(
      req.app.get('db'),
      req.user.id
    )
      .then(results => {
        res.status(200);
        res.json(results);
      });
  })
  .patch('/', jsonBodyParser, (req, res, next) => {
    return matchService.updateMatchInfo(
      req.app.get('db'),
      req.user.id,
      req.body
    )
      .then(results => {
        res.status(201);
        res.json(results);
      });
  })
;


module.exports = matchRouter;