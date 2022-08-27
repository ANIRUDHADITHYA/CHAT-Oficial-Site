import "./Register.css";
import useForm from "./../../Hooks/useForm";
import Validate from "./../../Utils/Validate";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const {handleChange, values, handleNext, handleBack, handleSubmit, errors, nextPage, errorsTwo, submit} = useForm(Validate);
    const [other, setOther] = useState(false);
    useEffect(()=>{
        if(values.domain === "other"){
            setOther(true)
        }else{setOther(false)}
    },[values.domain]);

    let navigate = useNavigate();
    return (
        <div className="register-section"> 
            <div class="container">
                {submit ? 
                <div>
                    <h1>Thank you for Applying</h1>
                    <h2>We will get back to you Soon once your Application is Processed</h2>
                    <button onClick={()=>{navigate("/")}}>Home</button>
                </div> : 
                <><header>Registration</header>
                <form action="#" className={nextPage ? "secActive" : ""}>
                    <div className="form first">
                        <div class="details personal">
                            <span className="title">Personal Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>First Name</label>
                                    <input name="first_name" type="text" placeholder="First Name" value={values.first_name} onChange={handleChange}/>
                                    {errors.first_name ? <p>*{errors.first_name}</p> : <p></p>}
                                </div>

                                <div className="input-field">
                                    <label>Last Name</label>
                                    <input name="last_name" type="text" placeholder="Last Name" value={values.last_name} onChange={handleChange}/>
                                    {errors.last_name ? <p>*{errors.last_name}</p> : <p></p>}
                                </div>

                                <div className="input-field">
                                    <label>Date of Birth</label>
                                    <input name="dob" type="text" maxlength="10" placeholder="dd/mm/yyyy" value={values.dob} pattern="([0-9]{2})\/([0-9]{2})\/([0-9]{4})" onChange={handleChange}/>
  
                                    {errors.dob ? <p>*{errors.dob}</p> : <p></p>}
                                </div>

                                <div className="input-field">
                                    <label>Personal Email</label>
                                    <input name="personal_email" type="email" placeholder="Enter your email" value={values.personal_email} onChange={handleChange}/>
                                    {errors.personal_email ? <p>*{errors.personal_email}</p> : <p></p>}
                                </div>

                                <div className="input-field">
                                    <label>Mobile Number</label>
                                    <input name="mobile" type="number" placeholder="Enter mobile number" value={values.mobile} onChange={handleChange}/>
                                    {errors.mobile ? <p>*{errors.mobile}</p> : <p></p>}
                                </div>

                                <div className="input-field">
                                    <label>Gender</label>
                                    <select name="gender" value={values.gender} onChange={handleChange}>
                                        <option value="NA" selected = "selected">Select Gender</option>
                                        <option value="male" >Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Others</option>
                                    </select>
                                    {errors.gender ? <p>*{errors.gender}</p> : <p></p>}
                                </div>
                            </div>
                        </div>

                        <div className="details ID">
                            <span className="title">College Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Department</label>
                                    <select name="department" value={values.department} onChange={handleChange}>
                                        <option value="NA" default selected="selected" >Select Department</option>
                                        <option value="IT" >Information Technology</option>
                                        <option value="CSC" >Computer Science and Engineering</option>
                                        <option value="EEE">Electrical and Electronics Engineering</option>
                                        <option value="ECE">Electronics and Communication Engineering</option>
                                        <option value="MECH">Mechanical Engineering</option>
                                        <option value="CIVIL">Civil Engineering</option>
                                    </select>
                                    {errors.department ? <p>*{errors.department}</p> : <p></p>}
                                </div>

                                <div className="input-field">
                                    <label>Roll Number</label>
                                    <input name="roll_number" type="text" placeholder="RA2011008020118" value={values.roll_number} onChange={handleChange}/>
                                    {errors.roll_number ? <p>*{errors.roll_number}</p> : <p></p>}
                                </div>


                                <div className="input-field">
                                    <label>Year of Study</label>
                                    <input name="current_year" type="number" placeholder="1 - 4" value={values.current_year} onChange={handleChange}/>
                                    {errors.current_year ? <p>*{errors.current_year}</p> : <p></p>}
                                </div>

                                <div className="input-field">
                                    <label>Official Email</label>
                                    <input name="official_email" type="email" placeholder="Enter Official Email" value={values.official_email} onChange={handleChange}/>
                                    {errors.official_email ? <p>*{errors.official_email}</p> : <p></p>}
                                </div>
                            </div>

                            <button class="nextBtn" onClick={handleNext}>
                                <span class="btnText">Next</span>
                                <i class="uil uil-navigator"></i>
                            </button>
                        </div> 
                    </div>

                    <div className="form second">
                        <div class="details address">
                            <span class="title">Domain Details</span>
                            <div className="domainInputContainer">
                                <div className="inputContainer">
                                    <label>Select your Domain</label>
                                    <select name="domain" value={values.domain} onChange={handleChange}>
                                        <option value="NA" default selected="selected" >Select Domain</option>
                                        <option value="CS">Cyber Security</option>
                                        <option value="AI">Artificial Inteligence</option>
                                        <option value="ML">Machine Learning</option>
                                        <option value="DS">Data Science</option>
                                        <option value="BC">Blockchain</option>
                                        <option value="WD">Web Development</option>
                                        <option value="CP">Competitive Programming</option>
                                        <option value="UIUX">UI/UX Designing</option>
                                        <option value="DE">Designing and Editing</option>
                                        <option value="DM">Digital Marketing</option>
                                        <option value="CB">Content Making and Blogging</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errorsTwo.domain ? <p>*{errorsTwo.domain}</p> : <p></p>}
                                </div>

                                <div className="inputContainer">
                                </div>

                                { other? <><div className="inputContainer">
                                    <label>Specify Other</label>
                                    <input type="text" name="other" value={values.other} placeholder="Other Domain Name" onChange={handleChange}/>
                                    {errorsTwo.other ? <p>*{errorsTwo.other}</p> : <p></p>}
                                </div></> : <></>}
                            </div>
                        </div>

                        <div class="details family">
                            <span class="title">Projects</span>

                            <div>
                                <div>
                                    <label>Let about your Projects ( Specifing your Domain )</label>
                                    <textarea name="project" type="text" placeholder="Type your Text here" value={values.project} onChange={handleChange}/>
                                    {errorsTwo.project ? <p>*{errorsTwo.project}</p> : <p></p>}
                                </div>
                            </div>

                            <div class="buttons">
                                <div class="backBtn" onClick={handleBack}>
                                    <i class="uil uil-navigator"></i>
                                    <span class="btnText">Back</span>
                                </div>
                                
                                <button class="sumbit" onClick={handleSubmit}>
                                    <span class="btnText">Submit</span>
                                    <i class="uil uil-navigator"></i>
                                </button>
                            </div>
                        </div> 
                    </div>
                </form></>
                 }
            </div>
        </div>
    )
    }
export default Register;