import { FunctionComponent, useEffect, useState} from "react"
import styles from "../../scss/_theme.scss";

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

interface ScoreProps {
  score: number,
  load: boolean
}

const Score: FunctionComponent<ScoreProps> = ({score, load = true}) => {
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