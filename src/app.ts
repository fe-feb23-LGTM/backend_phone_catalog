import express from 'express';
import 'dotenv/config'
import { getAllPhones, getPhoneAboutById, getPhoneById } from './controllers/phones';
import cors from 'cors';
import { authRouter } from './routes/authRouter';
import { userRouter } from './routes/userRouter';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(authRouter)

app.use('/users', userRouter)

app.get('/phones', getAllPhones);

app.get('/phones/:phoneId', getPhoneById);

app.get('/products/:phoneId', getPhoneAboutById)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
