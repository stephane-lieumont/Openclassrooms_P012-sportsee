import { FunctionComponent, useState, useEffect } from "react"

/**
 * Data Interfaces
 */
 import { IkindData, IperformanceData } from "../../types/InterfaceAPI"

/**
 * Rechart dependencies
 */
import { 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar
} from "recharts";

/**
 * Components
 */
import Loader from "../Loader";

/**
 * Utils functions
 */
import { translate } from "../../utils/translate";
import { firstLetterUpper } from "../../utils/formatString";

import './style.scss'

interface PerformanceProps{
  listKinds?:IkindData[],
  performanceData:IperformanceData[],
  load: boolean
}

const Performance: FunctionComponent<PerformanceProps> = ({ listKinds, performanceData = [], load = true }) => {
  const [loadComponent, setLoadComponent] = useState(false) 

  useEffect(() => {
    const timer = setTimeout(() => {
      if(load) {
        setLoadComponent(true)
      }
      clearTimeout(timer)
    }, 1000)
  }, [load])

  const tickFormatter = (value: number) : string => {
    const kindName:string = Object.values(listKinds!)[value - 1].toString()
    return firstLetterUpper(translate('fr', kindName)!)
  }
 
  return (
    <div className="performance">
      {loadComponent && listKinds ? (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis tickSize={15} dataKey="kind" stroke="white" tickLine={false} axisLine={false} tickFormatter={tickFormatter} />
          <Radar name="Performance" dataKey="value" fillOpacity={0.7} className="rechartradar" />
        </RadarChart>
      </ResponsiveContainer>
      ) : (
        <Loader absolute />
      )}
    </div>
  )
}

export default Performance