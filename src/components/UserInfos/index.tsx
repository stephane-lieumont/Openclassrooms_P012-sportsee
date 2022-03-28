import { FunctionComponent, useEffect, useState } from "react"
import './style.scss'

/**
 * Type
 */
import { UserInfosProps } from "../../types/TypeComponents"
/**
 * Components
 */
import Loader from '../Loader'

/**
 * Add userinfos data with icon
 * @param {UserInfosProps} Props
 * @param {string=} Props.value
 * @param {string=} Props.unit 
 * @param {string=} Props.icon Image url
 * @param {string=} Props.label 
 * @param {string=} [Props.color=red]
 * @param {string=} [Props.delay=0] delay to appear in milliseconds
 * @param {string=} [Props.load=true]
 * @returns 
 */
const UserInfos: FunctionComponent<UserInfosProps> = ({ value ='', unit ='', icon='', label='', color='red', delay = 0, load = true }) => {
  const [iconColor, setIconColor] = useState<string>()
  const [loadComponent, setLoadComponent] = useState(false) 

  useEffect(() => {
    const timer = setTimeout(() => {
      if(load) {
        setLoadComponent(true)
      }
      clearTimeout(timer)
    }, 1000 + delay)
  }, [load, delay])

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
    <div className={`user-infos ${ loadComponent ? '' : 'loading' }`}>
      <div className="user-infos__container flex">
        <div className={`user-infos__icon ${iconColor}`}><img src={icon} alt="fire icone"/></div>
        { loadComponent ? (
        <div className="user-infos__value">          
          <h4>{value}{unit}</h4>
          <p>{label}</p>          
        </div>
        ) : (
          <Loader />
        ) }
      </div>
    </div>
  );
}

export default UserInfos