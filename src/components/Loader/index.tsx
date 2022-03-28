import { FunctionComponent } from "react";
import './style.scss'

/**
 * Types
 */
import { LoaderProps } from "../../types/TypeComponents";

/**
 * Loader Component
 * @param {LoaderProps} Props
 * @param {boolean=} [Props.absolute=false]
 * @param {boolean=} [Props.light=false] Type color of loader contrast
 * @returns {FunctionComponent}
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