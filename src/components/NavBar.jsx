import './NavBar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function NavBar(){

    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (path, section) => {
        if(location.pathname === '/') {
            scrollToSection(section);
        } else {
            navigate(path);
            setTimeout(() => {
                scrollToSection(section)
            }, 300);
        }
    }

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    }

        return(
            <>
                <ul className="nav_bar">
                    <li><Link to={"/"} onClick={() => handleNavigation('/', 'home')}>home</Link></li>
                    <li><Link to={"/"} onClick={() => handleNavigation('/', 'projects')}>projects</Link></li>
                    <li><Link to={"/"} onClick={() => handleNavigation('/' ,'about')}>about</Link></li>
                    <li><Link to={"/"} onClick={() => handleNavigation('/', 'contact')}>contact</Link></li>
                </ul>
            </>
        )

}

export default NavBar;