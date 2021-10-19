import axios from 'axios';
/**
 * @URL {string} base URL
 */
axios.defaults.baseURL = 'http://localhost:3000';

const id = 12;

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

//  export const getActivity = async () => {
//     console.log(axios)
//     try {
//       const res = await axios.get(`user/${id}/activity`);
  
//       return {
//         sessions: res,
//       };
//     } catch (e) {
//       return e;
//     }
//   };

  

// /**
//  * @class
//  * @returns Each fucntion get datas in API
//  */
// class CallAPI {

//     /**
//      * Get a user by his id
//      * @param   {number} id user's id
//      * @return  {object} user
//      */
//     static async getUserInfo() {
//         return axios.get(`/user/${id}`);
//     }

//     /**
//      * Get a user's activity
//      * @param   {number} id user's id
//      * @return  {object} activity
//      */
//     getActivity() {
//         axios.get(`/user/${id}/activity`);
//     }

//     /**
//      * Get a user's activity duration
//      * @param   {number} id user's id
//      * @return  {object} activity duration
//      */
//     static async getAverageSessions() {
//         return fetch('/user/'+id+'/activity');
//     }

//     /**
//      * Get a user's activity intensity
//      * @param   {number} id user's id
//      * @return  {object} activity intensity
//      */
//     static async getPerformance() {
//         return axios.get(`/user/${id}/performance`);
//     }
// }

// export default CallAPI;

/**
* Allows to connect to a postgreSQL database
*
* @param url string of the endpoint to connect to
* @param user string of the user to be connected with
* @param password string of the user
*
* @return void
* @author Francis
* @version 1.0
*/

/**
 * @name getActivityData
 * @param {integer} userId - Id of a specific user
 * @returns {Object} - Object containing the user's activity data
 */