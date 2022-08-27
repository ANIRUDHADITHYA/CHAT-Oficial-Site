import { useUserAuth } from "../../ContextAPI/UserAuthContext";
import "./Home.css";
import { CardActionArea } from '@mui/material';
import { Player } from "@lottiefiles/react-lottie-player";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import UserNavbar from "./../UserNavbar/UserNavbar"
import { useEffect, useState } from "react";

const Home = () => {

    const { userDetails, userBlogs } = useUserAuth();
      

    return (
        
        <div className="home-body">
            
            <div className="home-container">
                <UserNavbar/>
                <section className="home-main">
                    <div className="home-main-top">
                        <h1>Quick Links</h1>
                        <i class="fas fa-solid fa-wand-sparkles"></i>
                    </div>
                    <div className="main-links">
                        <div className="links-card">
                            <i class="fas fa-solid fa-plus"></i>
                            <h2>Create Blog</h2>
                            <p>Create New Blogs Instantly</p>
                            <Link to="/dashboard/createBlog"><h5>Add Now</h5></Link>
                        </div>

                        <div className="links-card">
                            <i class="fas fa-solid fa-spinner"></i>
                            <h2>View Status</h2>
                            <p>Shows All Blogs Status</p>
                            <Link to="#"><h5>View Blog</h5></Link>
                        </div>

                        <div className="links-card">
                            <i class="fas fa-solid fa-address-card"></i>
                            <h2>Delete Blog</h2>
                            <p>Delete your Posted or Active Blogs</p>
                            <Link to="#"><h5>Delete Blog</h5></Link>
                        </div>

                        <div className="links-card">
                            <i class="fas fa-solid fa-address-card"></i>
                            <h2>Profile Changes</h2>
                            <p>Add Bio, Change Password, DP</p>
                            <Link to="#"><h5>Goto Profile</h5></Link>
                        </div>


                    </div>
                    <section className="recent-blogs">
                        <h1>Recent Blogs</h1>
                        <div className="blog-card-section">
                            {userBlogs ? userBlogs.map((blog, index) => (

                                <Link to={"/blogs/" + blog.blog_id}>
                                    <Card key={index} className="blogs-box" sx={{ maxWidth: 345 }}>
                                        <CardActionArea className="recent-blog-links">
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={blog.body[0].image}
                                                alt={blog.blog_id}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <h1>{blog.title}</h1>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>

                            )) :
                                <div className="not-found">
                                    <Player
                                        autoplay
                                        loop
                                        src="https://assets1.lottiefiles.com/packages/lf20_r71cen62.json"
                                        style={{ height: "200px", width: "95%", textAlign: "center" }}
                                    ></Player>
                                    <h1>Blogs not Found</h1>
                                </div>
                            }

                        </div>


                    </section>

                </section>
            </div>
        </div>
    )
}


export default Home;