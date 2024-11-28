import axios, { AxiosRequestHeaders } from 'axios';
import { api } from '../config';

const instance = axios.create({
    baseURL: api.baseURL,
    headers: {
        Authorization: 'Bearer 123', // до цього ми ще повернемося якось потім
        'Content-Type': 'application/json',
    } as AxiosRequestHeaders,
});

instance.interceptors.response.use((res) => res.data);

export default instance;
