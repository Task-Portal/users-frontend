async function getPositions(){
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${apiUrl}positions`);
    const positions = await response.json();
    return positions;
  };
  
  export default getPositions
  