import { FunctionComponent, useEffect, useState} from "react"
import { CustomTooltip } from "../CustomTooltip"

/**
 * Data Interfaces
 */
import { IsessionActivity } from "../../types/InterfaceAPI"

/**
 * Components
 */
import Loader from "../Loader"

/**
 * Rechart dependencies
 */
import { 
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Rectangle
} from "recharts"

import './style.scss'


interface ActivityProps{
  activityData:IsessionActivity[],
  load:boolean
}

const Activity: FunctionComponent<ActivityProps> = ({activityData = [], load = true}) => {
  const [loadComponent, setLoadComponent] = useState(false) 

  useEffect(() => {
    const timer = setTimeout(() => {
      if(load) {
        setLoadComponent(true)
      }
      clearTimeout(timer)
    }, 1000)
  }, [load])

  return (
    <div className="activity">
      <div className="activity__header flex">
        <h3>Activité quotidienne</h3>
        <ul className="flex activity__header__legende">
          <li className="activity__header__legende__item activity__header__legende__item--primary">Poids (kg)</li>
          <li className="activity__header__legende__item activity__header__legende__item--secondary">Calories brûler (kCal)</li>
        </ul>          
      </div> 
      {loadComponent ? (    
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width={300}
          height={200}
          barGap={6}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          data={activityData}
        >          
          <CartesianGrid vertical={false}  strokeDasharray={'2 2'} />
          <XAxis tickLine={false} domain={['dataMin', 'dataMax']}/>
          <YAxis interval={'preserveStartEnd'} axisLine={false} tickLine={false} orientation={'right'} yAxisId={1} dataKey={'kilogram'} domain={['dataMin - 5', 'dataMax + 5']} width={35} />
          <YAxis hide yAxisId={2} dataKey={'calories'} domain={['dataMin - 10', 'dataMax + 10']} />
          <Tooltip offset={40} content={<CustomTooltip />} />
          <Bar unit={'kg'} barSize={7} yAxisId={1} shape={<Rectangle radius={[5,5,0,0]} />} dataKey={'kilogram'} className="rechartbar-activity__kg" />
          <Bar unit={'KCal'} barSize={7} yAxisId={2} shape={<Rectangle radius={[5,5,0,0]} />} dataKey={'calories'} className="rechartbar-activity__cal" />
        </BarChart>
      </ResponsiveContainer>
      ) : (
        <Loader absolute></Loader>
      ) }
    </div>
  );
}

export default Activity

