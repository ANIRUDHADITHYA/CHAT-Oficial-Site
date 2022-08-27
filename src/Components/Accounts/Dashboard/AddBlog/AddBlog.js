import UserNavbar from "../UserNavbar/UserNavbar";
import "./AddBlog.css";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../ContextAPI/UserAuthContext";
import useForm from "./../../../Hooks/useForm";
import { Link } from "react-router-dom"
import { storage } from "./../../../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";


const AddBlog = () => {

    const { blogValues, setBlogID, setDate, handlePreview, handleBlogChange, setImage } = useForm();
    const { userDetails } = useUserAuth();
    const [imageUpload, setImageUpload] = useState(null);
    const imageListRef = ref(storage, `images/${blogValues.blog_id}`)

    /*function removeDuplicates(array) {
                      
        var jsonObject = array.map(JSON.stringify);  
        var uniqueSet = new Set(jsonObject);
        var uniqueArray = Array.from(uniqueSet).map(JSON.parse);  
        return uniqueArray;
    }*/

    const uploadImage = (event) => {
        event.preventDefault();

        if (imageUpload == null) {
            return;
        }
        uploadBytes(imageListRef, imageUpload).then(() => {
            alert("Uploaded")
            setImage();
            
        })
    }

    useEffect(() => {

        const setDefaults = (userDetails) => {
            blogValues.bio = userDetails.bio;
            blogValues.blog_id = setBlogID();
            blogValues.date = setDate();
            blogValues.first_name = userDetails.first_name;
            blogValues.profile_image = userDetails.profile_image;
            blogValues.user_id = userDetails.user_id;

        }
        if (userDetails) {
            setDefaults(userDetails)
        }

    }, [])

    const handleKeyDown = (e) => {
        console.log(e.target.scrollHeight)
        if (e.target.scrollHeight > 200) {
            e.target.style.height = 'inherit';
            e.target.style.height = `${e.target.scrollHeight}px`;
        }
    }

    console.log(blogValues)
    return (
        <div className="home-body">
            <div className="home-container">
                <UserNavbar />

                <section className="home-main home-blog-title">
                    <h1>Create Blog</h1>
                    <form>
                        <div className="blog-header">
                            <label>Title</label>
                            <input type="text" placeholder="Enter Blog Title" value={blogValues.title} onChange={handleBlogChange} name="title"></input>
                        </div>
                        <div className="blog-header">
                            <label>Hashtags</label>
                            <input type="text" placeholder="#lifeStyle #travel #sports" value={blogValues.hashtags} onChange={handleBlogChange} name="hashtags"></input>
                        </div>
                        <div className="blog-image">
                            <label>Blog Title Image</label>
                            <input type="file" accept="image/*" multiple={false} placeholder onChange={(event) => { setImageUpload(event.target.files[0]) }}></input>
                            <button onClick={uploadImage}>Upload Image</button>
                        </div>
                        <div className="blog-header">
                            <label>Blog Body</label>
                            <textarea onKeyDown={handleKeyDown} type="text" placeholder="Write your Blog here" value={blogValues.body} onChange={handleBlogChange} name="body"></textarea>
                        </div>
                        {/*<div className="blog-body">
                            {blogValues.body.map((fields, index) => (
                                <div key={index}>
                                    <div className="body-subBody">
                                        <div className="inputSubbody">
                                            <textarea placeholder="Blog Content" onChange={(e) => handleSubBodyChange(e, index)} name="subBody" type="text" value={fields.subBody} required></textarea>
                                        </div>
                                        <div className="second-division">
                                            {blogValues.body.length > 0 &&
                                                <button onClick={() => { handleSubBodyRemove(index) }} type="button" className="revove-btn">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>))
                            }
                        </div>*/}

                        {/*<div className="add-text-area">
                                <button onClick={handleSubBodyAdd} type="button" className="add-btn">
                                    <span><i class="fa-solid fa-plus"></i>Add Text Area</span>
                                </button>
                    </div>*/}
                        <div className="footer-blog-body">
                            <div className="blog-body-submit">
                                <button onClick={handlePreview} type="button" className="add-btn">
                                    <Link to="/dashboard/createBlog/preview"><span>Preview Blog</span></Link>
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

            </div>
        </div>
    )
}



export default AddBlog;