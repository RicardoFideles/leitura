import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers : {
        common : {
            Authorization : '13123123JASa2s'
        }
    }
});

export default instance