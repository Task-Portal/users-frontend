async function getUsers(params){
  console.log("Params: ", params)
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const response = await fetch(`${apiUrl}users?page=${params.page}&count=${params.count}&offset=${params.offset}`);
  const users = await response.json();
  return users;
};

export default getUsers;
