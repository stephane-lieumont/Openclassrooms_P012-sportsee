import { FunctionComponent, useState, useEffect } from "react"
import { useParams } from "react-router";
import './style.scss'
import { ResponsiveContainer, LineChart, XAxis,YAxis, Tooltip, Line } from "recharts";
import { Iaverage, IsessionAverage } from "../../types/IaverageSessions";
import API from "../../services/API";
import { CustomTooltip } from "../CustomTooltip";

const Sessions: FunctionComponent = () => {
  const { userId } = useParams<string>()
  const [sessionData, setSessionData] = useState<IsessionAverage[]>([])

  useEffect(() => {
    let data: Iaverage
    const callApi = async () => {
      try { 
        data = await API.getUserAverageSessions(userId!)
        setSessionData(data.sessions)
      }
      catch (err: any) { 
        console.error(err.message)
      }
    }
    callApi()    
  }, [userId])

  function formatXaxis(value : any) {
    const labels: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return labels[value - 1]
  }

  return (
    <div className="sessions">
      <h3 className="text--white">Durée moyenne des <br />sessions</h3>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart
          width={500}
          height={180}
          data={sessionData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <XAxis 
            axisLine={false} 
            tickLine={false} 
            tickFormatter={formatXaxis} 
            dataKey="day" 
            tick={{ fill: 'white' }}
            domain={[0, 0]}
            interval={'preserveStartEnd'}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis hide={true} domain={[0, 'dataMax + 2']} dataKey="sessionLength"/>
          <Tooltip content={<CustomTooltip />}/>
          <Line dataKey={'sessionLength'} unit={' min'} dot={false}  type="basis" stroke="#ffffff" activeDot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default Sessions