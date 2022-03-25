import { FunctionComponent, useState, useEffect } from "react"
import { useParams } from "react-router";
import './style.scss'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import { IdataKind, IdataPerformance, IuserPerformance } from "../../types/IuserPerformance";
import API from "../../services/API";
import { translate } from "../../utils/translate";
import { firstLetterUpper } from "../../utils/formatString";

const Performance: FunctionComponent = () => {
  const { userId } = useParams<string>()
  const [performanceKind, setPerformanceKind] = useState<IdataKind[]>()
  const [performanceData, setPerformanceData] = useState<IdataPerformance[]>()

  useEffect(() => {
    let data: IuserPerformance
    const callApi = async () => {
      try { 
        data = await API.getUserPerformances(userId!)
        setPerformanceKind(data.kind)
        setPerformanceData(data.data)
      }
      catch (err: any) { 
        console.error(err.message)
      }
    }
    callApi() 
  }, [userId])

  function tickFormatter(value: any) : any {
    const kindName:string = Object.values(performanceKind!)[value - 1].toString()
    return firstLetterUpper(translate('fr', kindName)!)
  }
 
  return (
    <div className="performance">
      {performanceData ? (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData}>
          <PolarGrid />
          <PolarAngleAxis tickSize={15} dataKey="kind" stroke="#FFFFFF" tickLine={false} axisLine={false} tickFormatter={tickFormatter} />
          <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      ) : null}
    </div>
  )
}

export default Performance