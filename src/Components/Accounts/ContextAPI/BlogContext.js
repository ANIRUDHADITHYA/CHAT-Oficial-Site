import { collection, query, where, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import { useUserAuth } from "./UserAuthContext";

const BlogDetails = createContext();



export function BlogDetailsProvider({ children }) {

    const { userDetails } = useUserAuth();

    const [blogsData, setBlogsData] = useState([]);
    const [userBlogs, setUserBlogs] = useState()

    useEffect(() => {

        const getBlogsData = async () => {

            const docRef = query(collection(db, "Blogs"));
            const data = await getDocs(docRef)
            setBlogsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getBlogsData()

    }, []);

    useEffect(()=>{
        const getBlogs = async () => {
            try {
                const blogQuery = query(collection(db, "Blogs"), where("user_id", "==", userDetails.user_id));
                const blogs = await getDocs(blogQuery);
                if (blogs.docs.length > 0 ){
                    setUserBlogs(blogs.docs.map((blog)  => ({...blog.data()})))
                }
            } catch(error){
                console.log(error)
            }
        }
        getBlogs()
    }, [userDetails])  


    return <BlogDetails.Provider value={{blogsData, userBlogs}}>{children}</BlogDetails.Provider>

}


export function useBlogDetails() {
    return useContext(BlogDetails);
}