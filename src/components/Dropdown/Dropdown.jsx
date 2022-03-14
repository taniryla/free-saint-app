import './Dropdown.css';
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext/FoodContext';

export default function Dropdown({ user }) {
    const { activeCat, setActiveCat } = useContext(FoodContext);
  

    return (
        <>
            <div className="btn-group open">
                <a className="btn btn-outline-secondary" href="#"><i className="fa fa-user fa-fw"></i> { user }</a>
                <a className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" href="#">
                    {/* <span class="fa fa-caret-down" title="Toggle dropdown menu"></span> */}
                </a>
                <ul className="dropdown-menu">
                    <li><a className="text-muted" href="#"><i className="fa fa-sign-in text-muted"></i> Login</a></li>
                    <li><a className="text-muted" href="#"><i className="icon-food"></i>Food log history</a></li>
                    <li className="divider"></li>
                    <li><a className="text-muted" href="#"><i className="fa fa-unlock"></i> Make admin</a></li>
                </ul>
            </div>
        </>
    )}
