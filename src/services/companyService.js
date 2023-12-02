import axios from '../setup/axios';
const fetchAllCompany = (page, limit) => {
    return axios.get(`/api/v1/company/read`);
};
export { fetchAllCompany };
