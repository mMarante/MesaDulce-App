import './style.css'
import Mesa from "../assets/Mesa.png"
import CartWidget from './CartWidget.js'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
    <div className="navbar-container">
        <div className="logo"> <img src={Mesa} alt="logo"></img> </div>

        <div className="menu">
            <ul>
                <NavLink className={({isActive})=>isActive ? "active" : "inactive" } to="/Productos">Productos</NavLink>
                <NavLink className={({isActive})=>isActive ? "active" : "inactive" } to="/Productos/Tortas">Tortas</NavLink>
                <NavLink className={({isActive})=>isActive ? "active" : "inactive" } to="/Productos/Cupcakes">Cupcakes</NavLink> 
                <NavLink className={({isActive})=>isActive ? "active" : "inactive" } to="/Nosotros">Nosotros</NavLink>
                <NavLink className={({isActive})=>isActive ? "active" : "inactive" } to="/Contacto">Contacto</NavLink>
            </ul>
        </div>
        
        <NavLink className={({isActive})=>isActive ? "active" : "inactive" } to="/Cart"><CartWidget/></NavLink>
        

    </div>)
}

export default NavBar