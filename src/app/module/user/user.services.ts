import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "46856",
    role: "Ashraful Cricketer",
    password: "Cricinfo",
    name:{
      firstName: "Jamal",
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