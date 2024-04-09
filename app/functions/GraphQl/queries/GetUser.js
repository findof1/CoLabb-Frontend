const GET_USER = (password, email) => {
  return `
  query{
    getUser (password: ${password}, email:${email}) {
      dogs {
        id
        breed
      }
    }
  }`;
};

export default GET_USER;
