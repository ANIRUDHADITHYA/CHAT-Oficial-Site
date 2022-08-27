import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import {auth} from "../../../firebase-config";
import { db } from "../../../firebase-config";

const UserAuthContext = createContext();



export function UserAuthContextProvider ({children}){
    const [user, setUser] = useState("")
    const [userDetails, setUserDetails] = useState()
    const [userBlogs, setUserBlogs] = useState()
    
    function logIn(email, password) {
        console.log("logged in")
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        localStorage.clear()
        return signOut(auth)
    }
    
    useEffect(()=>{    
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });        

        return () => {
            unsubscribe();
            
        }
        
    }, [])
    
    
    useEffect(()=>{
        const getUserDetails = async () =>{
            try {
                const userQuery = query(collection(db, "Users"), where("official_email", "==", user.email));
                const data = await getDocs(userQuery);
                if (data.docs.length === 1){
                setUserDetails(data.docs[0].data())              
                }
            } catch(error){
                console.log(error)
            }
        }
        getUserDetails()
        
        
    },[user])

    useEffect(()=>{
        const getBlogs = async () => {
            try {
                const blogQuery = query(collection(db, "Blogs"), where("user_id", "==", userDetails.user_id));
                const blogs = await getDocs(blogQuery);
                if (blogs.docs.length > 0 ){
                    setUserBlogs(blogs.docs.map((blog)  => ({...blog.data()})))
                    localStorage.setItem("userBlogs", JSON.stringify(userBlogs))
                }
            } catch(error){
                console.log(error)
            }
        }
        getBlogs()
    }, [userDetails])   
        

    return <UserAuthContext.Provider value={{user, userDetails, userBlogs, logIn, signOut, logOut}}>{children}</UserAuthContext.Provider>
    
}


export function useUserAuth() {
    return useContext(UserAuthContext);
}