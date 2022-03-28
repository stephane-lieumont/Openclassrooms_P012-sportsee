import { FunctionComponent, useState, useEffect } from "react"

/**
 * Data Interfaces
 */
import { IsessionAverageData } from "../../types/InterfaceAPI"

/**
 * Rechart dependencies
 */
import { 
  ResponsiveContainer,
  LineChart,  
  XAxis,
  YAxis,
  Tooltip,
  Line
} from "recharts";

/**
 * Components
 */
import Loader from "../Loader";

/**
 * Custom Tooltip
 */
import { CustomTooltip } from "../CustomTooltip";


import './style.scss'

interface SessionsProps {
  averageSessionData: IsessionAverageData[],
  load: boolean
}

const Sessions: FunctionComponent<SessionsProps> = ({ averageSessionData = [], load = true }) => {
  const [loadComponent, setLoadComponent] = useState(false) 

  useEffect(() => {
    const timer = setTimeout(() => {
      if(load) {
        setLoadComponent(true)
      }
      clearTimeout(timer)
    }, 1000)
  }, [load])

  const formatXaxis = (value : any) => {
    const labels: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return labels[value - 1]
  }

  return (
    <div className="sessions">
      <h3 className="text--white">Durée moyenne des <br />sessions</h3>
      {loadComponent ? (
      <ResponsiveContainer width="100%" height={180}>
        <LineChart
          width={500}
          height={180}
          data={averageSessionData}
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
          <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} dataKey="sessionLength"/>
          <Tooltip content={<CustomTooltip />}/>
          <Line dataKey={'sessionLength'} unit={' min'} dot={false}  type="natural" stroke="white" activeDot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
      ) : (
        <Loader absolute={true} light={true}/>
      ) }
    </div>
  );
}

export default Sessions