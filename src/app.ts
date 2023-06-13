import express from 'express';
import 'dotenv/config'
import { getAllPhones, getPhoneById } from './controllers/phones';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/phones', getAllPhones);

app.get('/phones/:phoneId', getPhoneById);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
