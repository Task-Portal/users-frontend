async function getToken() {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const response = await fetch(`${apiUrl}token`);
  const token = await response.json();
  return token;
}

export default getToken;
