import UserNavbar from "../UserNavbar/UserNavbar";
import { useBlogDetails } from "../../ContextAPI/BlogContext";
import "./ViewBlog.css";
import { CardActionArea } from '@mui/material';
import { Player } from "@lottiefiles/react-lottie-player";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


const ViewBlog = () => {

    const { userBlogs } = useBlogDetails();

    return (
        <div className="home-body">
            <div className="home-container">
                <UserNavbar />

                <section className="home-main home-blog-title">
                    <h1>Yours Blogs</h1>
                    <div>
                        <div className="blog-card-section">
                            {userBlogs ? userBlogs.map((blog, index) => (
                                <Link to={"/preview-blog/" + blog.blog_id}>
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
                    </div>

                </section>

            </div>
        </div>
    )
}



export default ViewBlog;