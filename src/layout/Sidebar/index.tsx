import { FunctionComponent } from "react";
import './style.scss'
/**
 * React Component function : Footer layout
 */
const SideBar: FunctionComponent = () => {  
  return (
    <div className="sidebar">
      <ul className="sidebar__group">
        <li className="sidebar__icon sidebar__icon--relax"></li>
        <li className="sidebar__icon sidebar__icon--swim"></li>
        <li className="sidebar__icon sidebar__icon--cicle"></li>
        <li className="sidebar__icon sidebar__icon--weight"></li>
      </ul>
      <div className="sidebar__copyright">
        <p>Copyright, SportSee { (new Date().getFullYear()) }</p>
      </div>
    </div>    
  );
}

export default SideBar;