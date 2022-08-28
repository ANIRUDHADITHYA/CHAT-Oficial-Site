import {Link} from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../ContextAPI/UserAuthContext";
import "./UserNavbar.css";

const UserNavbar = () =>{

    const [navActive, setNavActive] = useState(true);

    const { userDetails, logOut } = useUserAuth();

    const signOut = async () => {

        try{
            await logOut()
        } catch(error){
            console.log(error);
        }

    }
    const handleClick = () =>{
        setNavActive(!navActive)
    }

    
    return (
        <>
            {!navActive && <div onClick={handleClick} className="open-navabar">
                    <i class="fa-solid fa-bars"></i>
                </div>}
            <div className="user-navbar" id={navActive ? "" : "user-navbar-active"}>
                    {navActive && <div className="close-navabar" onClick={handleClick}>
                        <i class="fa-solid fa-xmark" ></i>
                    </div>}
                    
                    <ul>
                        <li>
                            <Link to="/dashboard" className="profile-image">
                                <img src={userDetails.profile_image} alt="Profile Image"/>
                                <span className="user-nav-item">{userDetails.first_name}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <i className="fas fa-home"></i>
                                <span className="user-nav-item">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/create-blog">
                                <i class="fas fa-solid fa-plus"></i>
                                <span className="user-nav-item">Create Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/delete-blogs">
                                <i class="fas fa-solid fa-trash"></i>
                                <span className="user-nav-item">Delete Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/view-blogs">
                                <i class="fas fa-solid fa-eye"></i>
                                <span className="user-nav-item">View Blogs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"+userDetails.user_id}>
                                <i class="fas fa-solid fa-address-card"></i>
                                <span className="user-nav-item">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i class="fas fa-solid fa-gear"></i>
                                <span className="user-nav-item">Account Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={signOut} className="logout">
                                <i class="fas fa-solid fa-right-from-bracket"></i>
                                <span className="user-nav-item">Logout</span>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                
        </>
    )
}

export default UserNavbar;