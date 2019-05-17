const express = require('express');
const AuthService = require('../auth/auth-service');
const { requireAuth } = require('../middleware/jwt-auth');
const fetch = require('node-fetch');
const proxyRouter = express.Router();
const jsonBodyParser = express.json();

// API requests to the openDota API are proxied through API. This is not necessary right now as the free plan requires no API key, but would be necessary later if an API key was used in order to protect the API key

// proxyRouter
//   .use(requireAuth);

proxyRouter
  .route('/:steamId')
  .get((req, res, next) => {
    return fetch(`https://api.opendota.com/api/players/${Number(req.params.steamId)}/recentMatches`)
      .then(res => res.json())
      .then(results => {
        res.status(201);
        res.json(results);
      })
      .catch(next);
  });

module.exports = proxyRouter;