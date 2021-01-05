import express from 'express';

const server = express();

server.get('/', (req, res) => {
  return res.json({ message: 'HELLO WORLD' });
});

server.listen(3333);
