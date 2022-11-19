import jwtDecode from 'jwt-decode';


const isTokenExpired = (token) => {
    const decodedToken = jwtDecode(token);
    return !decodedToken.exp || decodedToken.exp * 1000 < Date.now();
};