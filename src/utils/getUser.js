async function getUser(id){
    console.log("Params: ", id)
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${apiUrl}user/${id}`);
    const user = await response.json();
    return user;
  };
  
  export default getUser;
  