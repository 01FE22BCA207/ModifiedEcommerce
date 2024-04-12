import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';




import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';

dotenv.config();
const app = express();

const PORT = 8000;


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);


app.listen(PORT, () => console.log(`Server is running successfully  on PORT ${PORT}`));
DefaultData();

app.use(bodyParser.json({extended :true}));
app.use(bodyParser.urlencoded({ extended :true}));
app.use(cors());
app.use('/',router);