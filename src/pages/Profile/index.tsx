import { FunctionComponent, useEffect, useState } from "react"
import { useParams, Navigate } from "react-router"

/**
 * React Components
 */
import UserInfos from "../../components/UserInfos"
import Activity from "../../components/Activity"
import Sessions from "../../components/Sessions"
import Performance from "../../components/Performance"
import Score from "../../components/Score"

/**
 * Data Interfaces
 */
import API from "../../services/API"
import { 
  IsessionActivity,
  IkeyData, 
  IuserInfos, 
  IsessionAverage, 
  IuserPerformance,
  IuserData,
  Iactivity,
  IsessionAverageData,
  IkindData,
  IperformanceData
} from "../../types/InterfaceAPI"

/**
 * Assets
 */
import iconFire from "../../assets/fire.svg"
import iconChicken from "../../assets/chicken.svg"
import iconApple from "../../assets/apple.svg"
import iconCheeseburger from "../../assets/cheeseburger.svg"

import './style.scss'

/**
 * Profile Page component
 * @returns {FunctionComponent}
 */
const Profile: FunctionComponent = () => {
  const { userId } = useParams<string>()
  const { firstname } = useParams<string>()
  const [ errorAPI, setErrorAPI ] = useState<number>(200)

  const [userDataLoad, setUserDataLoad] = useState(true)
  const [userActivityDataLoad, setUserActivityDataLoad] = useState(true)
  const [userAverageSessionLoad, setUserAverageSessionLoad] = useState(true)
  const [userPerformancesDataLoad, setUserPerformancesDataLoad] = useState(true)

  const [userInfos, setUserInfos] = useState<IuserInfos>()
  const [userTodayScore, setUserTodayScore] = useState<number>()
  const [userKeyData, setUserKeyData] = useState<IkeyData>()
  const [userActivity, setUserActivity] = useState<IsessionActivity[]>()
  const [userAverageSessions, setUserAverageSessions] = useState<IsessionAverageData[]>()
  const [listKinds, setListKinds] = useState<IkindData[]>()
  const [userPerformances, setUserPerformances] = useState<IperformanceData[]>()

  // Call API to get Data of user
  useEffect(() => {
    const callApiUserInfos = async () => {
      try { 
        const userData:IuserData = await API.getUserData(userId!) 

        setUserDataLoad(true)
        setUserInfos(userData.userInfos)
        setUserTodayScore(userData.todayScore ? userData.todayScore : userData.score)
        setUserKeyData(userData.keyData)
        
        if(firstname !== userData.userInfos.firstName || Number(userId) !==  userData.id) {
          setErrorAPI(404)
        }
      }
      catch (err: any) { 
        setErrorAPI(err.status)
      }
    }

    const callApiActivity = async () => {
      try {      
        const userActivityData:Iactivity = await API.getUserActivity(userId!)

        setUserActivityDataLoad(true)
        setUserActivity(userActivityData.sessions)
      }
      catch (err: any) { 
        setErrorAPI(err.status)
      }
    }

    const callApiSession = async () => {
      try { 
        const userAverageSession:IsessionAverage = await API.getUserAverageSessions(userId!)

        setUserAverageSessionLoad(true)
        setUserAverageSessions(userAverageSession.sessions)
      }
      catch (err: any) { 
        setErrorAPI(err.status)
      }
    }

    const callApiPerformances = async () => {
      try { 
        const userPerformancesData:IuserPerformance = await API.getUserPerformances(userId!)

        setUserPerformancesDataLoad(true)
        setListKinds(userPerformancesData.kind)
        setUserPerformances(userPerformancesData.data)
      }
      catch (err: any) { 
        setErrorAPI(err.status)
      }
    }
    
    callApiUserInfos()
    callApiActivity()
    callApiSession()
    callApiPerformances()
  }, [userId, firstname])

  // Add event when window resize
  useEffect(() => {
    window.addEventListener('resize', () => {});
  }, []);

  // Return error server page
  if(errorAPI === 500) return <Navigate to="/erreur500-page-introuvable" state={{status: '500'}} />
  
  // Return error 404 page
  if(errorAPI === 404) return <Navigate to="/erreur404-page-introuvable" />  

  return (
    <section className="profile flex flex__column">
      <h1>Bonjour <span className="text--primary">{ userInfos?.firstName }</span></h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <div className="profile__stats flex flex__row flex__item">
        <div className="flex flex__column flex__item">          
          <div className="profile__activity">
            <Activity activityData={userActivity!} load={userActivityDataLoad} delay={200} />
          </div>          
          <ul className="profile__rating flex flex__row">
            <li><Sessions averageSessionData={userAverageSessions!} load={userAverageSessionLoad} delay={400} /></li>
            <li><Performance listKinds={listKinds!} performanceData={userPerformances!} load={userPerformancesDataLoad} delay={600} /></li>
            <li><Score score={Number(userTodayScore)} load={userDataLoad} delay={800} /></li>
          </ul>          
        </div>
        
        <ul className="profile__card-infos flex__item">
          <li><UserInfos delay={0} icon={iconFire} value={userKeyData?.calorieCount} unit={'kCal'} label={'Calories'} color="red" load={userDataLoad} /></li>
          <li><UserInfos delay={200} icon={iconChicken} value={userKeyData?.proteinCount} unit={'g'} label={'Proteines'} color="blue" load={userDataLoad} /></li>
          <li><UserInfos delay={400} icon={iconApple} value={userKeyData?.carbohydrateCount} unit={'g'} label={'Glucides'} color="yellow" load={userDataLoad} /></li>
          <li><UserInfos delay={600} icon={iconCheeseburger} value={userKeyData?.lipidCount} unit={'g'} label={'Lipides'} color="pink" load={userDataLoad}/></li>
        </ul>      
      </div>
    </section>
  );
}

export default Profile
