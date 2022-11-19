import request from './requests';
import constants from './constants';

const { API_ROUTES } = constants;


const getPosts = ({ pageLimit, page, filter }) => request.get({
    route: API_ROUTES.getPosts, config: {
        ...filter,
        page,
        limit: pageLimit
    }
});

const searchPosts = ({ pageLimit, page, filter }, search) => request.get({
    route: API_ROUTES.searchPosts.replace('%search%', search), config: {
        ...filter,
        page,
        limit: pageLimit
    }
});

const getSinglePost = (filter, id) => request.get({
    route: API_ROUTES.singlePost.replace('%id%', id), config: { ...filter }
});

const getPostCategories = ({ pageLimit, page, filter }) => request.get({
    route: API_ROUTES.postCategories, config: {
        ...filter,
        page,
        limit: pageLimit
    }
});

const getSingleCategory = (id) => request.get({
    route: API_ROUTES.singleCategory.replace('%id%', id), config: { ...filter }
});



const services = {
    getPosts,
    getSinglePost,
    getPostCategories,
    getSingleCategory,
    searchPosts
};

export default services;
