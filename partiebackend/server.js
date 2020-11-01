const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
require('dotenv').config({
    path: './config/.env',
  });
// MongoDB
const connectDB = require('./config/db');
connectDB();

app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cors())

app.use('/api/user/', require('./routes/auth'));


app.get('/', (req, res) => {
    res.send('test route => home page');
  });
  app.use((req, res) => {
    res.status(404).json({
      msg: 'Page not founded',
    });
  });
  const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});