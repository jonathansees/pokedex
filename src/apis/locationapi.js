import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.craft-demo.net/pokemon/',
    headers: {'x-api-key': 'HHko9Fuxf293b3w56zAJ89s3IcO9D5enaEPIg86l'}
});