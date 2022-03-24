import axios from "axios";
import { Iactivity } from "../types/Iactivity";
import { Iaverage, IsessionAverage } from "../types/IaverageSessions";
import { Iuser } from "../types/Iuser"
import { IuserPerformance } from "../types/IuserPerformance";

const uriMockGetUser: string = process.env.PUBLIC_URL + "/mocks/getUser.json"
const uriMockGetUserActivity: string = process.env.PUBLIC_URL + "/mocks/getUserActivity.json"
const uriMockGetUserAverageSessions: string = process.env.PUBLIC_URL + "/mocks/getUserAverageSessions.json"
const uriMockGetUserPerformances: string = process.env.PUBLIC_URL + "/mocks/getUserPerformance.json"

/**
 * Call API => get user data
 * @param {string} userId
 * @returns {Object}
 */
const getUserData = async (userId: string): Promise<Iuser> => {
  let data: Iuser

  return axios.get(uriMockGetUser)
    .then(res => {
      data = res.data.data      
      return data
    })
    .catch((err) => {
      err.response.message = 'Erreur lors de la requete API getUserData :' + err
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

  return axios.get(uriMockGetUserActivity)
    .then(res => {
      data = res.data.data
      return data
    })
    .catch((err) => {
      err.response.message = 'Erreur lors de la requete API getUserActivity :' + err
      throw err.response
    })
};

/**
 * Call API => get user average sessions
 * @param {string} userId
 * @returns {Object}
 */
const getUserAverageSessions = async (userId: string): Promise<Iaverage> => {
  let data: Iaverage

  return axios.get(uriMockGetUserAverageSessions)
    .then(res => {
      data = res.data.data
      return data
    })
    .catch((err) => {
      err.response.message = 'Erreur lors de la requete API getUserAverageSessions :' + err
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

  return axios.get(uriMockGetUserPerformances)
    .then(res => {
      data = res.data.data
      return data
    })
    .catch((err) => {
      err.response.message = 'Erreur lors de la requete API getUserPerformances :' + err
      throw err.response
    })
};

const API = {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformances
};
export default API;