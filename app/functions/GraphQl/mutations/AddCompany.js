import { v4 } from "uuid";

const ADD_COMPANY = (name, password, plan, userId) => {
  return `
  mutation{
    addCompany(code:"${v4()}", name:"${name}", adminPassword:"${password}", plan:"${plan}", startingUser:"${userId}"){
      _id
    }
  }`;
};

export default ADD_COMPANY;
