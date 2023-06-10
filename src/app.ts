import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
