import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.test.cyberia.studio/api/v1/'
})

export default instance
