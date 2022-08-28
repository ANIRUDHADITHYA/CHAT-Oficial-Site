import UserNavbar from "../UserNavbar/UserNavbar";
import "./Profile.css";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../ContextAPI/UserAuthContext";
import useForm from "./../../../Hooks/useForm";
import { storage } from "./../../../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { useBlogDetails } from "../../ContextAPI/BlogContext";



const Profile = () => {

    const {profileValues, handleProfileChange, setProfileImage, handleProfileUpdate, setProfileDefaults} = useForm();
    
    const { userDetails } = useUserAuth();
    const [imageUpload, setImageUpload] = useState(null);
    const imageRef = ref(storage, `profile/${userDetails.user_id}`)

    const uploadImage = (event) => {
        event.preventDefault();

        if (imageUpload == null) {
            return;
        }
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Uploaded")
            setProfileImage();

        })
    }

    useEffect(() => {
        const data = {
            bio: userDetails.bio,
            profile_image: userDetails.profile_image,
        }
        setProfileDefaults(data)
    
    }, [])
    
    return (
        <div className="home-body">
            <div className="home-container">
                <UserNavbar />

                <section className="home-main home-blog-title">
                    <h1>Profile</h1>

                    <div className="User-details-uc-container">
                        <div className="user-details-uc">
                            <label>First Name</label>
                            <h4>{userDetails.first_name}</h4>
                        </div>
                        <div className="user-details-uc">
                            <label>Last Name</label>
                            <h4>{userDetails.last_name}</h4>
                        </div>
                        <div className="user-details-uc">
                            <label>Roll Number</label>
                            <h4>{userDetails.roll_number}</h4>
                        </div>
                        <div className="user-details-uc">
                            <label>Official Id</label>
                            <h4>{userDetails.official_email}</h4>
                        </div>
                        <div className="user-details-uc">
                            <label>Mobile</label>
                            <h4>{userDetails.mobile}</h4>
                        </div>
                        
                        <div className="user-details-uc">
                            <label>Personal Email</label>
                            <h4>{userDetails.personal_email}</h4>
                        </div>
                    </div>
                    <p className="profile-warnings">*To change the above Details, Kindly contact your Admin</p>
                    <hr></hr>
                    <form>
                        <div className="profile-image">
                            <label>Profile Image</label>
                            <input type="file" accept="image/*" multiple={false} placeholder onChange={(event) => { setImageUpload(event.target.files[0]) }}></input>
                            <button onClick={uploadImage}>Upload Image</button>
                        </div>
                        <div className="profile-details">
                            <label>Bio</label>
                            <textarea type="text" placeholder="Set your Bio" value={profileValues.bio} name="bio" 
                            style={{height:"70px"}} onChange={handleProfileChange}></textarea>
                        </div>
                        <div className="footer-blog-body">
                            <div className="blog-body-submit">
                                <button type="submit" className="add-btn" onClick={handleProfileUpdate}>
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

            </div>
        </div>
    )
}



export default Profile;