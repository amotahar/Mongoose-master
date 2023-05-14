import express, {Application, NextFunction, Request, Response} from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();

//using cors
app.use(cors())

//parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req:Request, res:Response, next:NextFunction) => {

  // inseting a test data in mongoDB
  // res.send('Hello World!')
  // next();

  //creatingt an Interface 

  

  //creating schema using interface

 
  const createUserToDB = async () => {
    const user = new User({
      id: "1045",
      role: "Sumon",
      password: "78985645",
      name:{
        firstName: "Abul",
        middleName: "Ahmed",
        lastName: "Motahar",
      },
      gender: "female",
      email: "abc@example.com",
      contactNo: "454476564745",
      emergencyContactNo:"01245699756",
      presentAddress: "Feni",
      permanentAddress: "Dhaka",
    });
    await user.save();
    console.log(user);
  }

  createUserToDB();

});

export default app;