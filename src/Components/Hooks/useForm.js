import {useEffect, useState} from "react";
import ValidateTwo from "../Utils/ValidateTwo";
import {storage, db} from "./../../firebase-config";
import { setDoc , doc } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";




const useForm = (Validate) => {

    const imageListRef = ref(storage, `images/`)


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

    // createBlog functions

    /*const handleSubBodyAdd = () => {
        blogValues.body.length === 0 ? setBlogValues({ ...blogValues, body: [{ subBody: "" }] }) : setBlogValues({ ...blogValues, body: [...blogValues.body, { subBody: "" }] })
        //console.log(serviceList)
    }
    const handleSubBodyRemove = (index) => {
        const list = [...blogValues.body]
        list.splice(index, 1)
        setBlogValues({ ...blogValues, body: list })
    }

    const handleSubBodyChange = (e, index) => {
        const { name, value } = e.target
        const list = [...blogValues.body];
        list[index][name] = value;
        setBlogValues({ ...blogValues, body: list })
    }*/

    const handleBlogChange = (event) => {
        const {name,value} = event.target
        setBlogValues((preValues) => {
            return {
                ...preValues,
                [name]:value,
            }
        })
    }


    const handlePreview = () => {
        localStorage.setItem("tempBlog", JSON.stringify(blogValues))
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
        return "blog"+ (Object.keys(JSON.parse(localStorage.getItem("blogsData"))).length+1);
    }

    const setDate = () => {
        var today = new Date();
            return today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+' '+today.getHours()+':'+today.getMinutes();
    }


   
    return { handleChange, values, handleNext, handleBack, handleSubmit, errors, errorsTwo, nextPage, submit, 
        setBlogID, setDate, blogValues, handlePreview, handleBlogChange, setImage}
}

export default useForm;