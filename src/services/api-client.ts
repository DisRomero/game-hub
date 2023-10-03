import axios from 'axios';

export default axios.create({
    baseURL:'https://api.thecatapi.com/v1/',
    params:{
        api_key: 'live_wNMocj4vl3EcS6mCgyWCJJEiX0YdBB4tUv7qCndgVS5YWTioxRnd67KZWivpgJJM'
    }
})