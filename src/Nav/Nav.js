import './Nav.css'
import home from '../images/icons8-home-150.png'
import ticket from '../images/icons8-movie-ticket-100.png'
import tomato from '../images/icons8-tomato-64.png'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    
    return (
        <div className='navContainer'>
            <img className='ticket' alt='ticket icon'src={ticket} />
            <div className='headerContent'>
            <img className='tomatillo' alt='tomato' src={tomato} /> 
                <h1>Rancid Tomatillos </h1>
                <h1 className='slash'>🍿</h1>
                <h1>Movie Reviews</h1>
                <img className='tomatillo' alt='tomato' src={tomato} /> 
            </div> 
            <NavLink to="/">
                <img className='home'alt='home icon' src={home}/>
            </NavLink>
        </div>
    )
}

export default Nav