import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

mongoose.connect('mongodb://localhost/firstapi')

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3001, () => {
    console.log('Server is online!');
});