import "./Footer.css";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <div className="footerContainer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="socialIcon">
                    <li><Link to="#" ><i className="fa-brands fa-facebook-square"></i></Link></li>
                    <li><Link to="#" ><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="#" ><i className="fa-brands fa-twitter-square"></i></Link></li>
                    <li><Link to="#" ><i className="fa-brands fa-telegram"></i></Link></li>
                </ul>
                <ul className="menu">
                    <li><Link to="#" >Home</Link></li>
                    <li><Link to="#" >About Us</Link></li>
                    <li><Link to="#" >Blogs</Link></li>
                    <li><Link to="#" >Events</Link></li>
                    <li><Link to="#" >Contact Us</Link></li>
                    <li><Link to="#" >Accounts</Link></li>
                </ul>
                <p>©2022 CHAT Official | All Rights Reserved</p>
            </div>
        </div>
    )
}


export default Footer;