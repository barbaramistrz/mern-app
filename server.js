// import express from 'express';
// import http from "http";

const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = http.Server(app);
 
app.get('/api', (req, res) => {
    res.json({status: 'server works!'})
});

httpServer.listen(PORT, () => {console.log('Server listening on port', PORT)} )

