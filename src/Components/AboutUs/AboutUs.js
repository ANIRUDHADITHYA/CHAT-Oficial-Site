import "./AboutUs.css";
import { Player } from "@lottiefiles/react-lottie-player";


const AboutUs = () =>{
    return(
        <div>   
            <div className="aboutUsContainer">
                <div className="aboutUsCol">
                    <h1>Who are We ? </h1>
                    <h2>CHAT - Community Of Hackers And Advanced Technologists.</h2>
                    <p>                     
                    We Integrate tech and differentiate through Hack. 
                    CHAT is one of the most active club in SRM. We are intensely involved in laying out 
                    awareness among the users regarding the cyber and technological threats. Our community is 
                    highly skilled with the recent trends in growing technology. The main aim is to contribute our 
                    works for this society, that will help them in wise use of technology. Our action plan includes a series 
                    of hands on sessions with a webinar continued by several activities that will aid the members to think 
                    out of the box and work in a group where it gives you a mutual learning. CHAT is very passionate in cyber security field.
                    </p>
                </div>
                <div className="aboutUsCol">
                <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_ljotbiif.json"
                    style={{ height: "550px", width: "95%" }}
                ></Player>
                </div>
            </div>
        </div>
    )
}


export default AboutUs;