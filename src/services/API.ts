import axios from "axios";

/**
 * Data Interfaces
 */
import { 
  IuserData,
  Iactivity,
  IsessionAverage,
  IuserPerformance
} from "../types/InterfaceAPI";

/**
 * MOCK API GETTERS
 */
/*
const uriMockGetUser: string = process.env.PUBLIC_URL + "/mocks/getUser.json"
const uriMockGetUserActivity: string = process.env.PUBLIC_URL + "/mocks/getUserActivity.json"
const uriMockGetUserAverageSessions: string = process.env.PUBLIC_URL + "/mocks/getUserAverageSessions.json"
const uriMockGetUserPerformances: string = process.env.PUBLIC_URL + "/mocks/getUserPerformance.json"
*/

/**
 * Call API => get user data
 * @param {string} userId
 * @returns {Object}
 */
const getUserData = async (userId: string): Promise<IuserData> => {
  let data: IuserData

  return axios.get(`http://192.168.1.2:3000/user/${userId}`)
    .then(res => {
      data = res.data.data      
      return data
    })
    .catch((err) => {
      throw err.response
    })
};

/**
 * Call API => get user activities
 * @param {string} userId
 * @returns {Object}
 */
const getUserActivity = async (userId: string): Promise<Iactivity> => {
  let data: Iactivity

  return axios.get(`http://192.168.1.2:3000/user/${userId}/activity`)
    .then(res => {
      data = res.data.data
      return data
    })
    .catch((err) => {
      console.log(err)
      throw err.response
    })
};

/**
 * Call API => get user average sessions
 * @param {string} userId
 * @returns {Object}
 */
const getUserAverageSessions = async (userId: string): Promise<IsessionAverage> => {
  let data: IsessionAverage

  return axios.get(`http://192.168.1.2:3000/user/${userId}/average-sessions`)
    .then(res => {
      data = res.data.data
      return data
    })
    .catch((err) => {
      throw err.response
    })
};

/**
 * Call API => get user performances
 * @param {string} userId
 * @returns {Object}
 */
const getUserPerformances = async (userId: string): Promise<IuserPerformance> => {
  let data: IuserPerformance

  return axios.get(`http://192.168.1.2:3000/user/${userId}/performance`)
    .then(res => {
      data = res.data.data
      return data
    })
    .catch((err) => {
      throw err.response
    })
};

/**
 * Object to call functions for API data
 */
const API = {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformances
};
export default API;