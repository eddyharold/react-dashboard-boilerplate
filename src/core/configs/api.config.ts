import { API_URL, REQUEST_HEADER_AUTH_KEY, TOKEN_TYPE } from '@/common/constants/api.constant';

import axios from 'axios';
import * as localstorage from './localstorage.config';

const instance = axios.create({
    baseURL: API_URL,
    timeout: 60000,
    headers: {
        Accept: 'application/json',
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = localstorage.get('token');
        const requestConfig = config;

        if (token) requestConfig.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${token}`;

        return requestConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
