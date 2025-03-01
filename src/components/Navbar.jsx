import '../App.css'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';

Navbar.propTypes = {
    home_color: PropTypes.string,
    
  }
function Navbar(props)
{

    return (
        <>
        
        <div className='nav'>
            <div className='logo flex flex-row'>
            
            <Link to="/" className={`flex flex-row ${props.home_color} wavy transition-all duration-700 ease-in-out hover:tracking-widest`}>
                <div className='flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" className={`fill-current ${props.home_color}`} viewBox="0 0 30 30">
                    <path d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z"></path>
                </svg>
               
                </div>

               
                <div id='text_wave'>
                    Home
                </div>

               
            </Link>
            </div>
            {/* <div className='nav-links'>
                <div className='nav-item'>
                    <Link to="/portfolio/">
                        Home
                    </Link>
                </div>
            </div> */}
           <Helmet>
           <script src="/portfolio/wave.js"></script>
           </Helmet>
        </div>
        
        
        </>
    );
}


export default Navbar;