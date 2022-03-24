import { FunctionComponent, useEffect, useState } from "react"
import { useParams } from "react-router"
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Rectangle } from "recharts"
import { Iactivity, IsessionActivity } from "../../types/Iactivity"
import { CustomTooltip } from "../CustomTooltip"
import './style.scss'
import API from "../../services/API"


const Activity: FunctionComponent = () => {
  const { userId } = useParams<string>()
  const [sessionData, setSessionData] = useState<IsessionActivity[]>()

  useEffect(() => {
    let data : Iactivity

    const callApi = async () => {
      try { 
        data = await API.getUserActivity(userId!)
        setSessionData(data.sessions)
      }
      catch (err: any) { 
        console.error(err.message)
      }
    }
    callApi()    
  }, [userId])

  if(sessionData) {
    return (
      <div className="activity">
        <div className="activity__header flex">
          <h3>Activité quotidienne</h3>
          <ul className="flex activity__header__legende">
            <li className="activity__header__legende__item activity__header__legende__item--primary">Poids (kg)</li>
            <li className="activity__header__legende__item activity__header__legende__item--secondary">Calories brûler (kCal)</li>
          </ul>          
        </div>       
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={300}
            height={200}
            barGap={6}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            data={sessionData}
          >          
            <CartesianGrid vertical={false}  strokeDasharray={'2 2'} />
            <XAxis tickLine={false} domain={['dataMin', 'dataMax']}/>
            <YAxis interval={'preserveStartEnd'} axisLine={false} tickLine={false} orientation={'right'} yAxisId={1} dataKey={'kilogram'} domain={['dataMin - 5', 'dataMax + 5']} />
            <YAxis hide yAxisId={2} dataKey={'calories'} domain={['dataMin - 10', 'dataMax + 10']} />
            <Tooltip offset={40} content={<CustomTooltip />} />
            <Bar unit={'kg'} barSize={7} yAxisId={1} shape={<Rectangle radius={[5,5,0,0]} />} dataKey={'kilogram'} fill={'#282D30'} />
            <Bar unit={'KCal'} barSize={7} yAxisId={2} shape={<Rectangle radius={[5,5,0,0]} />} dataKey={'calories'} fill={'#E60000'} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null
}

export default Activity

