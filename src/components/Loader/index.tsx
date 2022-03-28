import { FunctionComponent } from "react";

import './style.scss'

type LoaderProps = {
  absolute?: boolean,
  light?: boolean
} 

/**
 * React Component function : Loader
 * @param props Component props
 * @param props.absolute Css position configuration
 * @param props.light Type color of loader
 */
const Loader: FunctionComponent<LoaderProps> = ({absolute = false, light = false} : LoaderProps) => {
  return (
    <div className={`loader-container 
      ${ absolute && 'loader-container--absolute' }
      ${ light && 'loader-container--light' }
    `}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;