import './style.css'
import logo from '../Assets/Mesa.png'
import CartWidget from './CartWidget.js'

const NavBar = () => {
    return (
    <div className="navbar-container">
        <div className="logo"> <img src={logo} alt="logo"></img> </div>

        <div className="menu">
            <ul>
                <li><a href="#">Tortas</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        
        <CartWidget/>

    </div>)
}

export default NavBar