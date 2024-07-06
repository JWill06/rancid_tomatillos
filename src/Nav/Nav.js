import './Nav.css'
import home from '../images/icons8-home-150.png'
import ticket from '../images/icons8-movie-ticket-100.png'

const Nav = () => {
    return (
        <div className='navContainer'>
            <img src={ticket} />
            <h1>Rancid Tomatillos!</h1>
            <img alt='home icon' src={home} />
        </div>
    )
}

export default Nav