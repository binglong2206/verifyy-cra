import axios from "axios";


const baseURL = process.env.NODE_ENV === 'environment' 
    ? "http://localhost:8000" 
    : "/api/v1" 

export default axios.create({
    baseURL,
})