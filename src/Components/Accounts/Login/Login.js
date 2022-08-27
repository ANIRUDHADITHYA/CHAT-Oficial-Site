import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./../ContextAPI/UserAuthContext";
import "./Login.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";



const LoginAccount = () =>{

  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth()
  const [accountStatus, setAccountStatus] = useState(false);

  const loginAccount = (e) => {
    const signIn = async (e) => {
      try {
        await logIn(loginEmail, loginPassword)
        navigate("/dashboard");
          
      } catch (error) {
        setError("Password is Incorrect")
      }
    }
    if(accountStatus){
      signIn()
    }else { setError("Account is Inactive")}

  }
  const handleEmailChange = (e) => {
      setLoginEmail(e.target.value)
  }
  useEffect(()=>{
    const getUser = async () =>{
      
      const q = query(collection(db, "Users"), where("official_email", "==", loginEmail));
      const data = await getDocs(q);
      if (data.docs.length === 1){
        data.forEach((doc) => {
          setAccountStatus(doc.data().isActive)
          
        });
      } else setAccountStatus(false)
    }
    getUser()
  }, [handleEmailChange])

  return(

    <div className="login-body">
      <div className="login-container">
        <div className="login-forms">
          <div className="login-form login">
            <span className="login-title">Login</span>

            <form action="#">
              <div className="login-input-field">
                <input type="text" placeholder="Enter your email" value={loginEmail} onChange={handleEmailChange} required />
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="login-input-field">
                <input type="password" class="password" placeholder="Enter your password" value={loginPassword} onChange={(event)=>{setLoginPassword(event.target.value)}} required />
                <i className="fa-solid fa-lock"></i>
              </div>
              <div></div>

              <div className="login-checkbox-text">
                {error && <div>{error}</div> }
                          
                <a href="#" className="login-text">Forgot password?</a>
              </div>

              <div className="login-input-field button">
                <input type="button" value="Login" onClick={loginAccount} />
              </div>
            </form>
            <div className="login-signup">
              <span className="login-text">
                <a href="/register" className="login-text signup-link">Apply Now</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    )
}


export default LoginAccount;