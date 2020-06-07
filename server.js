// import express from 'express';
// import http from "http";

const express = require('express');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = http.Server(app);

 
app.get('/api', (req, res) => {
    res.json({status: 'server works!'})
});

app.get('/api/posts', (req, res) => {
    res.json({posts: []})
})
// serve static react app
app.use('/', express.static(path.resolve(path.dirname(''), './client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.dirname(''), './client/build/index.html'));
});

httpServer.listen(PORT, () => {console.log('Server listening on port', PORT)} )

