import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import {auth} from "../../../firebase-config";
import { db } from "../../../firebase-config";

const UserAuthContext = createContext();



export function UserAuthContextProvider ({children}){
    const [user, setUser] = useState("")
    const [userDetails, setUserDetails] = useState()
    
    
    function logIn(email, password) {
        console.log("logged in")
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
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

    return <UserAuthContext.Provider value={{user, userDetails, logIn, signOut, logOut}}>{children}</UserAuthContext.Provider>
    
}


export function useUserAuth() {
    return useContext(UserAuthContext);
}