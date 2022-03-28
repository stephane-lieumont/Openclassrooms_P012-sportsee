import { FunctionComponent } from "react";
import './style.scss'

interface CustumTooltipProps {
  active?: boolean,
  payload?: any
}

export const CustomTooltip: FunctionComponent<CustumTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`custom-tooltip ${ payload[0].fill === '#fff' ? 'light' : '' }`}>
        {payload[0] ? ( <p className="label">{`${payload[0].value}${payload[0].unit}`}</p> ) : null }
        {payload[1] ? (<p className="label">{`${payload[1].value}${payload[1].unit}`}</p> ) : null }
      </div>
    );
  }

  return null;
};