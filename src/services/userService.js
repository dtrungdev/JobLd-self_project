import axios from '../setup/axios';

const registerNewUser = (fullname, email, password) => {
    return axios.post('/api/v1/register', {
        fullname,
        email,
        password,
    });
};

const loginUser = (email, password) => {
    return axios.post('/api/v1/login', {
        email,
        password,
    });
};

export { registerNewUser, loginUser };
