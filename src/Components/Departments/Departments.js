import "./Departments.css";

const Departments = () => {
    return(
        <div>
            <div className="departmentsContainer">
                <h1>Our Club Departments</h1>
                <h5>CHAT has both Technical and Non Technicals Departments</h5>
                <div className="contentContainer">

                    <div className="contentCard">
                        <i className="fa-solid fa-shield"></i>
                        <div className="mainContent">
                            <h3>Ethical Hacking</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo odit inventore, ut exercitationem numquam a modi molestiae?</p>
                        </div>
                    </div>

                    <div className="contentCard">
                        <i className="fa-solid fa-globe"></i>
                        <div className="mainContent">
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo odit inventore, ut exercitationem numquam a modi molestiae?</p>
                        </div>
                    </div>

                    <div className="contentCard">
                        <i className="fa-solid fa-laptop-code"></i>
                        <div className="mainContent">
                            <h3>Advance Programming</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo odit inventore, ut exercitationem numquam a modi molestiae?</p>
                        </div>
                    </div>

                    <div className="contentCard">
                        <i className="fa-solid fa-compass-drafting"></i>
                        <div className="mainContent">
                            <h3>Designing and Editing</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo odit inventore, ut exercitationem numquam a modi molestiae?</p>
                        </div>
                    </div>

                    <div className="contentCard">
                        <i className="fa-solid fa-chart-column"></i>
                        <div className="mainContent">
                            <h3>Digital Marketing</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo odit inventore, ut exercitationem numquam a modi molestiae?</p>
                        </div>
                    </div>

                    {/*<div className="contentCard">
                        <i className="fa-solid fa-handshake"></i>
                        <div className="mainContent">
                            <h3>PR Team </h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo odit inventore, ut exercitationem numquam a modi molestiae?</p>
                        </div>
    </div>*/}

                    <div className="contentCard">
                        <i className="fa-brands fa-blogger"></i>
                        <div className="mainContent">
                            <h3>Content Making and Blogging</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo odit inventore, ut exercitationem numquam a modi molestiae?</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Departments;