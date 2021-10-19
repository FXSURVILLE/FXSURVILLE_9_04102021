import axios from 'axios';
/**
 * @param url {string} string of the endpoint to connect to
 */
axios.defaults.baseURL = 'http://localhost:3000';

/**
 * @param {number} userId - Id of a specific user: 12 or 18
 */
const id = 12;

/**
 * @class
 * @returns Each fucntion get datas in API
 */
class CallAPI {
    static async getUserById() {
        return axios.get(`/user/${id}`);
    }
    static async getActivity() {
        return axios.get(`/user/${id}/activity`);
    }
    static async getSessionDuration() {
        return axios.get(`/user/${id}/average-sessions`);
    }
    static async getSessionIntensity() {
        return axios.get(`/user/${id}/performance`);
    }
}

export default CallAPI
