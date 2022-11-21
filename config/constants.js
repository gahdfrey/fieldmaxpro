const API = {
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
    timeout: 60000,
};

const API_ROUTES = {
    getPosts: '/blog/posts',
    singlePosts: '/blog/posts/%id%',
    searchPosts: '/blog/posts/search/%search%',
    postCategories: '/blog/categories',
    singleCategory: '/blog/categories/%id%'
};

const constants = {
    API,
    API_ROUTES,
};

export default constants;