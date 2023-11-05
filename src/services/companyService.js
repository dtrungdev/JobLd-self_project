import axios from 'axios';
const fetchAllCompany = (page, limit) => {
    return axios.get(`http://localhost:8080/api/v1/company/read`);
};
export { fetchAllCompany };
