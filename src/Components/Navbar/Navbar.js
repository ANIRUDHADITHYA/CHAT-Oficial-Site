import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Navbar.css';
import { useUserAuth } from "../Accounts/ContextAPI/UserAuthContext";

const Navbar = (props) => {

    const { user } = useUserAuth();
    const [click,setClick] = useState(false);    
    const closeMobileMenu = () => {
        setClick(false);
        window.scroll({top:0, behavior: 'smooth'})
    }
    const handleClick = () => setClick(!click);
    const [colorChange, setColorchange] = useState(false);
    const contactUsScroll = () =>{
        setClick(false);
        window.scroll({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
    
    /*const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
        };
    
    window.addEventListener('scroll', changeNavbarColor);*/
        
    
    return (
        <>
        <nav className="navbar">
            <div className={props.colors || colorChange ? 'colorChange' : 'defaultcolor'}>
            
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">CHAT</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
                            Blogs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={user? "/dashboard": "/account"} className="nav-links" onClick={closeMobileMenu}>
                            {user? user.email : "Account"}
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}


export default Navbar;