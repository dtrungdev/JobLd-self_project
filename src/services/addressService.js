import axios from '../setup/axios';

const registerNewUser = (fullname, email, password) => {
    return axios.post('/api/v1/register', {
        fullname,
        email,
        password,
    });
};

export { registerNewUser };
