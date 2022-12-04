import axios, { AxiosError } from 'axios';
import constants from './constants';
import helpers from './helpers';

const {
    API: { baseURL, timeout } } = constants;

const fmp = axios.create({
    baseURL,
    timeout,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTHORIZATION}`
    }
});

export default fmp;