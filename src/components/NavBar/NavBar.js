import './style.css'
import logo from '../Assets/Mesa.png'
import cake from '../Assets/Cake.png'

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
        <div className="carrito">
            <img src={cake} alt="carrito"></img>
        </div>
    </div>)
}

export default NavBar