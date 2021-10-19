import axios from 'axios';
/**
 * @param url {string} string of the endpoint to connect to
 */
axios.defaults.baseURL = 'http://localhost:3000';


/**
 * @class
 * @param {integer} id - Id of a specific user: 12 or 18
 * @returns Each fucntion get datas in API
 */
class CallAPI {
    static async getUserById(id) {
        return axios.get(`/user/${id}`);
    }
    static async getActivity(id) {
        return axios.get(`/user/${id}/activity`);
    }
    static async getSessionDuration(id) {
        return axios.get(`/user/${id}/average-sessions`);
    }
    static async getSessionIntensity(id) {
        return axios.get(`/user/${id}/performance`);
    }
}

export default CallAPI
