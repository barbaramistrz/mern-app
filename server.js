// import express from 'express';
// import http from "http";

const express = require('express');
const http = require('http');
const path = require('path');
const { Datastore } = require('nedb-async-await');


const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = http.Server(app);

const db = {};
db.posts = Datastore({
  filename: path.resolve(path.dirname(''), './database/posts.db'),
  autoload: true,
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

 
app.get('/api', (req, res) => {
    res.json({status: 'server works!'})
});

// app.get('/api/posts', (req, res) => {
//     res.json({posts: []})
// });

app.post('/api/posts', async (req, res) => {
  const {title, content} = req.body;
  const status = await db.posts.insert({title, content});
  res.json(status)
});


app.get('/api/posts', async (req, res) => {
  const posts = await db.posts.find({});
  res.json({ posts })
});

app.get('/api/posts/:id', async (req, res) => {
  const post = await db.posts.find({ _id: req.params.id });
  res.json({ post })
});

// update
app.put('/api/posts/:id', async (req, res) => {
  const { title, content } = req.body;
  const status = await db.posts.update(
    { _id: req.params.id },
    { title, content }
  );
  res.json(status);
});

// delete
app.delete('/api/posts/:id', async (req, res) => {
  const status = await db.posts.remove({ _id: req.params.id });
  res.json(status);
});
// serve static react app
app.use('/', express.static(path.resolve(path.dirname(''), './client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.dirname(''), './client/build/index.html'));
});

httpServer.listen(PORT, () => {console.log('Server listening on port', PORT)} )

