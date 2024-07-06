import './Nav.css'
import home from '../images/icons8-home-150.png'
import ticket from '../images/icons8-movie-ticket-100.png'
import tomato from '../images/icons8-tomato-64.png'

const Nav = ({onClick}) => {

    const handleChange = (e) => {
        e.preventDefault();

        onClick()
    }
    return (
        <div className='navContainer'>
            <img className='ticket' alt='ticket icon'src={ticket} />
            <div className='headerContent'>
            <img className='tomatillo' alt='tomato' src={tomato} /> 
                <h1>Rancid Tomatillos </h1>
                <h2>Movie Reviews</h2>
                <img className='tomatillo' alt='tomato' src={tomato} /> 
            </div> 
            <img className='home'alt='home icon' src={home} onClick={handleChange}/>
        </div>
    )
}

export default Nav