import axios from 'axios';

const registerNewUser = (fullname, email, password) => {
    return axios.post('http://localhost:8080/api/v1/register', {
        fullname,
        email,
        password,
    });
};
