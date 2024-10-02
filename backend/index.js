const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://moon:12345@cluster0.trjthwg.mongodb.net/quiz')
const db=mongoose.connection;

db.on('open',()=>{
    console.log('connected')
})

db.on('error',()=>{
    console.log('not connected')
})

app.use(express.json());

 const authRoutes = require('./controllers/Auth');
 const quizRoutes = require('./controllers/Quiz');
  const resultRoutes=require('./controllers/Result')

 app.use('/auth',authRoutes)
 app.use('/quiz',quizRoutes)
  app.use('/result',resultRoutes)

app.listen(9000,()=>{
    console.log('server listening on port 9000')
})
