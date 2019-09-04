import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.craft-demo.net/pokemon/',
    headers: {'x-api-key': process.env.REACT_APP_CRAFT_DEMO_API_KEY}
});