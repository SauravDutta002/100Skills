import axios from "axios"

const api = axios.create({
    Base_URL : "https://one00skills.onrender.com/api",
    headers: {
    'Content-Type': 'application/json',
  },

})
export default api