import express from 'express';
import cors from "cors";
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();
    //npm run dev = comando para ligar o servidor
console.log('Sever Ligado');

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);