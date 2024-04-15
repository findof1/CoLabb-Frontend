const ADD_USER = (password, email) => {
  return `
  mutation{
    addUser(password:"${password}", email:"${email}"){
      _id,
      password,
      email
    }
  }`;
};

export default ADD_USER;
