import { useUserStore } from '../state/useStore';
import axios from 'axios'

export const UploadProfile = async (file) => { // hooks

    // Create a FormData object and store the file and then make an axios post to server
    const formData = new FormData();
    formData.append('profile', file);
    await axios.post('http://localhost:8000/user/profile', formData , {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart-formdata'
      }
     }).then((r) => {
      console.log(r.data)
      useUserStore.setState({profile_image: r.data.url}) // Forces re-render after update
     })
   
  };


export const UploadBackground = async (file) => { // hooks

    // Create a FormData object and store the file and then make an axios post to server
    const formData = new FormData();
    formData.append('profile', file);
    await axios.post('http://localhost:8000/user/background', formData , {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart-formdata'
      }
     }).then((r) => {
      useUserStore.setState({background_image: r.data.url}) // Forces re-render after update
     })

     
   
  };