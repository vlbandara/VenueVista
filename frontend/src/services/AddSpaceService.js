import axios from 'axios';

const endPointSpace = "http://localhost:8080/api/v1/spaces";

//create a space
const createSpaces = async (requestBody) => {
    console.log("working");
    try {
      const space = await axios.post(endPointSpace + '/createspaces', requestBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("response received: ", space);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(error.response.data.message || 'Failed to create space: Server error');
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error('Request failed to be sent');
      }
    }
  };

  const getAllSpaces = ()=>{

  }


//get all spaces
export{createSpaces , getAllSpaces} 