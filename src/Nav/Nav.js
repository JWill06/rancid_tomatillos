import './Nav.css'
import home from '../images/icons8-home-150.png'
import ticket from '../images/icons8-movie-ticket-100.png'
import tomato from '../images/icons8-tomato-64.png'

const Nav = () => {
    return (
        <div className='navContainer'>
            <img className='ticket' alt='ticket icon'src={ticket} />
            <div className='headerContent'>
                <h1>Rancid Tomatillos! Movie Reviews</h1>
                <img className='tomatillo' alt='tomato' src={tomato} /> 
            </div> 
            <img className='home'alt='home icon' src={home} />
        </div>
    )
}

export default Nav