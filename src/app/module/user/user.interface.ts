export interface IUser{
  id: string,
  role: "student",
  password: string,
  name:{
    firstName: string,
    middleName?: string,
    lastName: string,
  },
  doB?: string,
  gender: "male" | "female";
  email?: string,
  contactNo: string,
  emergencyContactNo: string,
  presentAddress: string,
  permanentAddress: string,
};