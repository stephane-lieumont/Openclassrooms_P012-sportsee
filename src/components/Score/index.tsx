import { FunctionComponent, useEffect, useState} from "react"
import styles from "../../scss/_theme.scss";

/**
 * Types
 */
import { ScoreProps } from "../../types/TypeComponents";

/**
 * Rechart dependencies
 */
import { 
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Tooltip
} from "recharts";

/**
 * Components
 */
 import Loader from "../Loader";

import './style.scss'

/**
 * Graphik chart component of user score 
 * @param {ScoreProps} Props
 * @param {number} Props.score
 * @param {number=} [Props.delay=0] delay to appear in milliseconds
 * @param {boolean=} [Props.load=true]
 * @returns 
 */
const Score: FunctionComponent<ScoreProps> = ({score, delay = 0, load = true}) => {
  const [loadComponent, setLoadComponent] = useState(false) 

  // create dataObject to params Rechart component
  const data = [
    {
      "name": "18-24",
      "uv": 100,
      "id": "rechartradial-bar__ref",
      "fill": "transparent"
    },
    {
      "name": "25-29",
      "uv": score * 100,
      "id": "rechartradial-bar__score",
      "fill": styles.primary
    },
  ]  

  useEffect(() => {
    const timer = setTimeout(() => {
      if(load) {
        setLoadComponent(true)
      }
      clearTimeout(timer)
    }, 200 + delay)
  }, [load, delay])

  return (
    <div className="score">
      <h3>Score</h3>
      <div className={`score__content ${loadComponent ? '' : 'loading' }`}>          
        <h4>{score *100}%</h4>
        <p>de votre objectif</p>      
      </div>
      {loadComponent ? (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          width={400} 
          height={400} 
          innerRadius="80%" 
          barSize={10}
          data={data} 
          startAngle={90} 
          endAngle={450}
        >
          <RadialBar background={{fill: "white"}} cornerRadius={5} max={100} dataKey={'uv'} className="rechartradial-bar" />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
      ) : (
        <Loader absolute />
      ) }
    </div>
  )
}

export default Score