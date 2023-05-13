import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()
const port = 5000

//database connection
async function bootstrap() {
 try{
  await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
  console.log(`Database Connection Successful`);

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
 }
 catch(err) {
  console.log(`Database Connection Error: `, err)
 }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootstrap();



