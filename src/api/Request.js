import axios from "axios";

const AUTHORIZATION = "Authorization";
const CONTENT_TYPE = "Content-Type";
const APPLICATION_JSON = "application/json";

const instance = axios.create({
    baseURL: "http://localhost:8080/api",
});

instance.interceptors.request.use((config) => {
    config.headers.get[AUTHORIZATION] = token();

    config.headers.post[AUTHORIZATION] = token();
    config.headers.post[CONTENT_TYPE] = APPLICATION_JSON;

    config.headers.put[AUTHORIZATION] = token();
    config.headers.put[CONTENT_TYPE] = APPLICATION_JSON;

    config.headers.delete[AUTHORIZATION] = token();
    config.headers.delete[CONTENT_TYPE] = APPLICATION_JSON;
    return config;
});

export default Request = {
    get: (url, config) => {
        return instance.get(url, config);
    },
    post: (url, data, config) => {
        return instance.post(url, data, config);
    },
    put: (url, data, config) => {
        return instance.put(url, data, config);
    },
    delete: (url, data, config) => {
        return instance.delete(url, data, config);
    },
};

function token() {
    // return authorization header with jwt token
    // let user = Authentication.getUser();

    // if(user && user.token)
    //     return `Bearer ${user.token}`;

    return "";
}

// function handleError(response) {
//     if (response && (response.status === 401 || response.status === 403)) {
//         // auto logout if 401 response returned from api
//         Authentication.signout();
//         location.reload(true);
//     } else {
//         store.dispatch(HandleResponse.error(response));
//     }
// }