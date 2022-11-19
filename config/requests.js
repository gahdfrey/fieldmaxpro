import fmp from './fmp';

const get = async ({ route, config }) => {
    const response = await fmp.get(route, config);
    return response.data;
};

const post = async ({ route, payload }) => {
    const response = await fmp.post(route, payload);
    return response.data;
};

const patch = async ({ route, payload }) => {
    const response = await fmp.patch(route, payload);
    return response.data;
};

const request = {
    get,
    post,
    patch,
};

export default request;
