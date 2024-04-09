const GET_USER = (password, email) => {
  return `
  query {
    getUser(password:"${password}", email:"${email}"){
      _id,
      password,
      email
    }
  }`;
};

export default GET_USER;
