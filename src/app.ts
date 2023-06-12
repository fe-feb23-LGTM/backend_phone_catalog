import express from 'express';
import 'dotenv/config'
import { getAllPhones, getPhoneById } from './Controllers/phones';

const app = express();
const port = process.env.PORT;

app.get('/products', getAllPhones);

app.get('/products/:phoneId', getPhoneById);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
