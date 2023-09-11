import getToken from "./getToken";

async function createUserInDb(user) {
  const {token} =  await getToken();
  const apiUrl = process.env.REACT_APP_API_BASE_URL;


  const formData = new FormData();

  formData.append("email", user.email);
  formData.append("name", user.name);
  formData.append("phone", user.phone);
  formData.append("position_id", user.positionId);
  formData.append("photo", user.photo); 

  const myHeaders = new Headers({
    'jwt': token
});
  const response = await fetch(`${apiUrl}user`, {
    method: "POST",
    body: formData, 
    headers: myHeaders,
  });
  const result = await response.json();
  return result;
}

export default createUserInDb;
