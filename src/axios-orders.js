import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-buidler.firebaseio.com/'
});

export default instance;