import { FunctionComponent} from "react"
import './style.scss'
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

interface ScoreProps {
  score: number
}

const Score: FunctionComponent<ScoreProps> = ({score}) => {
  const data = [
    {
      "name": "18-24",
      "uv": 100,
      "fill": "transparent"
    },
    {
      "name": "25-29",
      "uv": score * 100,
      "fill": "#E60000"
    },
  ]

  return (
    <div className="score">
      <h3>Score</h3>
      <div className="score__content">        
        <h4>{score *100}%</h4>
        <p>de votre objectif</p>
      </div>
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
          <RadialBar background={{fill: "white"}} cornerRadius={5} max={100} dataKey={'uv'} />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Score