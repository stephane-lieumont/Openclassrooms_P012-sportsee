import { FunctionComponent, useState, useEffect } from "react"
import './style.scss'

/**
 * Types
 */
 import { PerformanceProps } from "../../types/TypeComponents";

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

/**
 * Graphik chart component of user performances 
 * @param {PerformanceProps} Props
 * @param  {IkindData[]} Props.listKinds
 * @param  {IperformanceData[]} Props.performanceData
 * @param  {number=} [Props.delay=0]  delay to appear in milliseconds
 * @param  {boolean=} [Props.load=true]
 * @returns {FunctionComponent}
 */
const Performance: FunctionComponent<PerformanceProps> = ({ listKinds, performanceData, delay = 0, load = true }) => {
  const [loadComponent, setLoadComponent] = useState(false) 

  useEffect(() => {
    const timer = setTimeout(() => {
      if(load) {
        setLoadComponent(true)
      }
      clearTimeout(timer)
    }, 200 + delay)
  }, [load, delay])

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