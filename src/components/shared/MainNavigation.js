import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>            
      <nav>                
        <ul className={classes.links}>           
          <li>               
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
                   All Users             
            </NavLink>             
          </li>                     <li>               
            <NavLink
              to="/create"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
                  Create User            
            </NavLink>
             
          </li>
                  
        </ul>
              
      </nav>
          
    </header>
  );
}
export default MainNavigation;
