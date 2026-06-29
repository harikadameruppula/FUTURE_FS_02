import axios from "axios";

const API = axios.create({
   baseURL: "https://mini-crm-backend-b9af.onrender.com/api"
});

export default API;