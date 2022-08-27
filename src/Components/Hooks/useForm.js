import {useEffect, useState} from "react";
import ValidateTwo from "../Utils/ValidateTwo";
import ValidateBlog from "../Utils/ValidateBlog";
import {storage, db} from "./../../firebase-config";
import { setDoc , doc } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useBlogDetails } from "./../Accounts/ContextAPI/BlogContext";
import {useNavigate} from "react-router-dom"




const useForm = (Validate) => {

    const navigate = useNavigate();
    const imageListRef = ref(storage, `images/`);
    const { blogsData } = useBlogDetails();
    const [values, setValues] = useState({

        first_name: "",
        last_name: "",
        dob: "",
        personal_email: "",
        mobile: "",
        gender: "",
        department: "",
        roll_number: "",
        current_year: "",
        official_email: "",
        domain: "",
        other: "",
        project: "",
        isActive: false,
        role: "member",
        user_id: "",
        blog_count: "",
        bio: "",
        profile_image: "",
        
    })
    const [blogValues, setBlogValues] = useState({
        bio: "",
        blog_id: "",
        blog_status: false,
        image: "",
        body: "",
        hashtags: "",
        date: "",
        first_name: "",
        likes: 0,
        profile_image: "",
        title: "",
        user_id: "",
    })

    const [errors, setErrors] = useState({});
    
    const [errorsTwo, setErrorsTwo] = useState({});

    const [nextPage, setNextPage] = useState(false);

    const [isNext, setIsNext] = useState(false);

    const [isSubmit, setIsSubmit] = useState(false);

    const [submit, setSubmit] = useState(false);

    

    const handleNext = (event) => {
        event.preventDefault();
        setErrors(Validate(values))
        setIsNext(true)
    }

    const handleChange = (event) => {
        const {name,value} = event.target
        setValues((preValues) => {
            return {
                ...preValues,
                [name]:value,
            }
        })
    }
    const handleBack = () =>{
        setNextPage(false)
    }

    

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrorsTwo(ValidateTwo(values))
        setIsSubmit(true)
    }



    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isNext){
            setNextPage(true)
        }
    },[errors])

    useEffect(()=>{

        const createUser = async () => {
            values.user_id = values.roll_number.trim()
            await setDoc(doc(db, "Users", values.user_id), values);
            setSubmit(true);
        }
        if(Object.keys(errorsTwo).length === 0 && isSubmit){
            createUser();         
        }
    },[errorsTwo])


    const [ blogError, setBlogError ] = useState({});
    const [ isBlogSubmit, setIsBlogSubmit ] = useState(false);

    const handleBlogChange = (event) => {
        const {name,value} = event.target
        setBlogValues((preValues) => {
            return {
                ...preValues,
                [name]:value,
            }
        })
    }


    const setImage = () => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    if (item.name === blogValues.blog_id) {      
                                     
                        setBlogValues({...blogValues, image:url})
                    }
                })
            })
        })
    }
    

    const setBlogID = () => {
        blogValues.blog_id = "blog"+ (Object.keys(blogsData).length+1);
    }
    

    const setDate = () => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var today = new Date();
        blogValues.date = months[today.getMonth()] + " " + today.getDate()+', '+today.getFullYear();
        
    }

    const setBlogDefaults = (data) => {
        setBlogID();
        setDate();
        setBlogValues({...blogValues, ...data})
        console.log(blogValues)
    }

    const handleSubmitBlog = (event) => {
        event.preventDefault();
        console.log("submit requested")
        setBlogError(ValidateBlog(blogValues))
        setIsBlogSubmit(true)
    }

    useEffect(()=>{

        const addToRequest = async () => {
            console.log("submit handled")
            console.log(blogValues)
            try {
                await setDoc(doc(db, "Blogs", blogValues.blog_id), blogValues);
                setIsBlogSubmit(true)
                navigate("/dashboard")
            }catch(err){
                console.log(errors)
            }
        }
        if(Object.keys(blogError).length === 0 && isBlogSubmit){
            console.log("submit check")
            addToRequest();         
        }
    },[blogError])



   
    return { handleChange, values, handleNext, handleBack, handleSubmit, errors, errorsTwo, nextPage, submit, 
        setDate, setBlogID,blogValues, handleSubmitBlog, handleBlogChange, setImage, blogError, setBlogDefaults}
}

export default useForm;