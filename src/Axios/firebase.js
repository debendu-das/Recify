import axios from 'axios';

const firebase = axios.create({
    baseURL: 'https://recify-app-default-rtdb.firebaseio.com/'
});

export default firebase;