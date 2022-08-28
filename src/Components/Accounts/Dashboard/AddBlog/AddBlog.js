import UserNavbar from "../UserNavbar/UserNavbar";
import "./AddBlog.css";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../ContextAPI/UserAuthContext";
import useForm from "./../../../Hooks/useForm";
import { storage } from "./../../../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { useBlogDetails } from "../../ContextAPI/BlogContext";



const AddBlog = () => {

    const { blogValues, blogError, setBlogDefaults,  handleSubmitBlog, handleBlogChange, setImage } = useForm();
    const { userDetails } = useUserAuth();
    const [imageUpload, setImageUpload] = useState(null);
    const imageRef = ref(storage, `images/${blogValues.blog_id}`)

    const uploadImage = (event) => {
        event.preventDefault();

        if (imageUpload == null) {
            return;
        }
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Uploaded")
            setImage();

        })
    }

    useEffect(() => {
        const data = {
            bio: userDetails.bio,
            first_name: userDetails.first_name,
            profile_image: userDetails.profile_image,
            user_id: userDetails.user_id,
        }
        setBlogDefaults(data)
    
    }, [])

    const handleKeyDown = (e) => {
        console.log(e.target.scrollHeight)
        if (e.target.scrollHeight > 200) {
            e.target.style.height = 'inherit';
            e.target.style.height = `${e.target.scrollHeight}px`;
        }
    }

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
                            <p>{blogError.title}</p>
                        </div>
                        <div className="blog-header">
                            <label>Hashtags</label>
                            <input type="text" placeholder="#lifeStyle #travel #sports" value={blogValues.hashtags} onChange={handleBlogChange} name="hashtags"></input>
                            <p>{blogError.hashtags}</p>
                        </div>
                        <div className="blog-image">
                            <label>Blog Title Image</label>
                            <input type="file" accept="image/*" multiple={false} placeholder onChange={(event) => { setImageUpload(event.target.files[0]) }}></input>
                            <p>{blogError.image}</p>
                            <button onClick={uploadImage}>Upload Image</button>
                        </div>
                        <div className="blog-header">
                            <label>Blog Body</label>
                            <textarea onKeyDown={handleKeyDown} type="text" placeholder="Write your Blog here" value={blogValues.body} onChange={handleBlogChange} name="body"></textarea>
                            <p>{blogError.body}</p>
                        </div>
                        <div className="footer-blog-body">
                            <div className="blog-body-submit">
                                <button onClick={handleSubmitBlog} type="submit" className="add-btn">
                                    Submit Blog
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