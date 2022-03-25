import { FunctionComponent, useEffect, useState } from "react"
import './style.scss'

interface UserInfosProps {
  value?: number,
  unit?: string,
  icon?: string,
  label?: string,
  color?: string
}

const UserInfos: FunctionComponent<UserInfosProps> = ({ value ='', unit ='', icon='', label='', color='red' }) => {
  const [iconColor, setIconColor] = useState<string>()

  useEffect(() => {
    switch(color) {
      case 'red':
        setIconColor('user-infos__icon--red')
        break
      case 'yellow':
        setIconColor('user-infos__icon--yellow')
        break
      case 'blue':
        setIconColor('user-infos__icon--blue')
        break
      case 'pink':
        setIconColor('user-infos__icon--pink')
        break
      default:
        setIconColor('user-infos__icon--red')
    }
  }, [color])

  return (
    <div className="user-infos">
      <div className="user-infos__container flex">
        <div className={`user-infos__icon ${iconColor}`}><img src={icon} alt="fire icone"/></div>
        <div className="user-infos__value">
          <h4>{value}{unit}</h4>
          <p>{label}</p>  
        </div>
      </div>
    </div>
  );
}

export default UserInfos