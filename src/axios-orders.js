import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e7ea9.firebaseio.com/'
});

export default instance;