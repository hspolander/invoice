import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import invoiceData from '../data/data.json';
import routes from './routes';

const app = express();

app.use(cors());
app.use((req, res, next) => {
  req.context = {
    invoiceData,
  };
  next();
});
app.use('/invoice', routes.invoice);


app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`),
);
