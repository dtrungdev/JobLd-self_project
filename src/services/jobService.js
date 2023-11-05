import axios from 'axios';

const fetchAllJob = (page, limit) => {
    return axios.get(`http://localhost:8080/api/v1/job/read?page=${page}&limit=${limit}`);
};

const fetchPositionToSearch = () => {
    return axios.get(`http://localhost:8080/api/v1/job/position/read`);
};

export { fetchAllJob, fetchPositionToSearch };
