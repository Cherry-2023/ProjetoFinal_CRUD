import axios from 'axios'

const api = axios.create({
   // baseURL:'http://localhost:4000/',
   baseURL:'https://projectocrud.onrender.com',
    headers:{
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

export default api;