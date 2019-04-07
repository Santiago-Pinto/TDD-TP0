import Cell from './prototypes/Cell'
import Parser from './prototypes/Parser'
import Maze from './prototypes/Maze'

const express = require('express');
const app = express();
app.use(express.json());


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  let obj = JSON.parse(JSON.stringify(req.body));
  let parser = new Parser(req.body.impassableTypes);
  let maze = new Maze(parser.parse(req.body.cells));
  res.send(maze.validate());
});
