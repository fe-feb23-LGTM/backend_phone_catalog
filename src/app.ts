import express from 'express';
import 'dotenv/config'
import { getAllPhones, getPhoneById } from './Сontrollers/phones';

const app = express();
const port = process.env.PORT;

app.get('/phones', getAllPhones);

app.get('/phones/:phoneId', getPhoneById);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
