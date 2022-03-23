import { IUser } from "../types/iUser"

const uriMockGetUser: string = process.env.PUBLIC_URL + "/mocks/getUser.json"
// const uriMockGetUserActivity: string = process.env.PUBLIC_URL + "/mocks/getUserActivity.json"
// const uriMockGetUserAverageSessions: string = process.env.PUBLIC_URL + "/mocks/getUserAverageSessions.json"
// const uriMockGetUserPerformances: string = process.env.PUBLIC_URL + "/mocks/getUserPerformance.json"

/**
 * Call API get user data
 * @returns Object with housings data
 */
const getUserData = async (id: number): Promise<IUser> => {
  let response: any
  let data: IUser

  try {
    response = await fetch(uriMockGetUser)
    data = await response.json()
    return data
  } catch (err: any) {
    throw new Error('Erreur lors de la requete API GetUserDataById :' + err)
  }
};

const Data = {
  getUserData
};
export default Data;