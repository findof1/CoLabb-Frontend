const JOIN_COMPANY = (code, id) => {
  return `
  mutation{
    joinCompany(code:"${code}", id:"${id}"){
      _id
    }
  }`;
};

export default JOIN_COMPANY;
