import UserNavbar from "../UserNavbar/UserNavbar";
import { useBlogDetails } from "../../ContextAPI/BlogContext";
import { CardActionArea } from '@mui/material';
import { Player } from "@lottiefiles/react-lottie-player";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "./DeleteBlog.css"
import { useState } from "react";


const DeleteBlog = () => {

    const { userBlogs } = useBlogDetails();
    const [deleteBlog, setDeleteBlog] = useState(false);

    return (
        <div>
            <div className="home-body">
                <div className="home-container">
                    <UserNavbar />

                    <section className={deleteBlog ? "home-main home-blog-title delete-blog-active" : "home-main home-blog-title"}>
                        <h1>Delete Blogs</h1>
                        <div>
                        {!deleteBlog && 
                            <div className="blog-card-section">
                                {userBlogs ? userBlogs.map((blog, index) => (

                                    <Card key={index} className="blogs-box" sx={{ maxWidth: 345 }}>
                                        <CardActionArea className="recent-blog-links">
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={blog.image}
                                                alt={blog.blog_id}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <h1>{blog.title}</h1>
                                                </Typography>
                                                <div className="blogCardFlex">
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        <p>Date: {blog.date}</p>
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        <p>Blog Status: {blog.blog_status ?
                                                            <span className="blogStatus active">Active</span> :
                                                            <span className="blogStatus">Inactive</span>}</p>
                                                    </Typography>
                                                </div>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <button className="">Delete Blog</button>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>


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


                                {deleteBlog &&
                                    <div className="warning-card">
                                        <div className="warning-card-container">
                                            <Card sx={{ maxWidth: 345 }} style={{ border: "1px solid rgb(167, 0, 0)" }}>
                                                <CardActionArea>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h1" component="div">
                                                            <h1>Delete Blog</h1>
                                                        </Typography>
                                                        <Typography gutterBottom variant="h3" component="div">
                                                            <h3>Are you sure you want to delete your Blog ?</h3>
                                                        </Typography>
                                                        <div className="blogCardFlex">
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                <button className="delete-button">Yes</button>
                                                            </Typography>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                <button>No</button>
                                                            </Typography>
                                                        </div>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </div>}
                            </div>}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}



export default DeleteBlog;