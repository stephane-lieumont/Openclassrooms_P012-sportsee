import { FunctionComponent } from "react"
import { Navigate } from "react-router"
import './style.scss'

/**
 * React Component function : Header layout
 */
const EmptyInDev: FunctionComponent = () => {
  return <Navigate  to='/profile' />
}

export default EmptyInDev
