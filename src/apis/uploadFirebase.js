import axios from 'axios'

export const uploadProfile = async (file) => {

    // Create a FormData object and store the file and then make an axios post to server
    const formData = new FormData();
    formData.append('profile', file);
    await axios.post('http://localhost:8000/user/profile', formData , {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart-formdata'
      }
     })
   
  };


export const uploadBackground = async (file) => {

    // Create a FormData object and store the file and then make an axios post to server
    const formData = new FormData();
    formData.append('profile', file);
    await axios.post('http://localhost:8000/user/background', formData , {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart-formdata'
      }
     })
   
  };