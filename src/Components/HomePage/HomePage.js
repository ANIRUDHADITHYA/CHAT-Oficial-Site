import {Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css"
import Typewriter from 'typewriter-effect';
import AboutUs from "../AboutUs/AboutUs";
import Testimonials from "../Testimonials/Testimonials";
import Departments from "../Departments/Departments";
import Footer from "../Footer/Footer";

const HomePage =() =>{

    
    return(
        <>
            <section className="sectionOne">
                <Navbar/>
                <div className="homepageContainer">
                    <h6>Get Started with</h6>
                    <div className="titleContainer">
                        <h1><span id="title">CHAT</span> a </h1>
                        <h1 className="typewriterContainer">
                        <Typewriter
                                options={{
                                    strings: ['Community of Hackers and Technologiests'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </div>
                    <Link to='/register'><button>APPLY NOW</button></Link>
                </div>
            </section>
            <section className="sectionTwo">
                <Departments/>
            </section>
            <section className="sectionThree">
                <AboutUs/>               
            </section>
            <section className="sectionFour">
                <Testimonials/>               
            </section>
            <section className="sectionFive">
                <Footer/>               
            </section>
        </>
    )
}

export default HomePage;