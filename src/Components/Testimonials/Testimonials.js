import "./Testimonials.css";
const Testimonials = () => {
    return (
        <div>
            <div className="testimonialsContainer">
                <h1>From Our Club Members</h1>
                <h5></h5>

                <div className="cards">
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/Images/profile1.webp"} />
                        <p>CHAT being one of the fastest growing club of SRMIST rmp has helped me in developing all-round skills required for further coming challenges in corporate world. The work efficiency, public relations are one of the high in demand skills and CHAT team helped me developing those skills.</p>
                        <h2>Trupt Acharya</h2>
                        <h4>Content Maker @CHAT</h4>
                        <i className="fa fa-quote-left" />
                    </div>

                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/Images/profile2.jpg"} />
                        <p>CHAT helps me to learn more about Cybersecurity. The weekly classes helped many of my co-members to learn more and improve our Cybersecurity skills too. CHAT experience so far has been awesome.</p>
                        <h2>Siddharthan</h2>
                        <h4>Tresurer @CHAT</h4>
                        <i className="fa fa-quote-left" />
                    </div>

                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/Images/profile3.webp"} />
                        <p>Hi, my self GILLA VISHWANATH, I have been the treasurer for the CHAT club for around two years. this is the club formed to teach the students with good technical stuff in Ethical Hacking. I have acquired a lot from the club in the means of technical, behavioral, and how to manage my time, it is the place we have learned the coding languages, where we have done some awesome projects, this is an interesting place to learn with the people who are in eager of doing great things, there will be weekly classes, regular events, and many more.</p>
                        <h2>Gilla Vishwanth</h2>
                        <h4>Tresurer @CHAT</h4>
                        <i className="fa fa-quote-left" />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Testimonials;