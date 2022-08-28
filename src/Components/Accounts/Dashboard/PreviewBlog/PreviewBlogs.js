import { Link, useParams } from "react-router-dom"
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import { useBlogDetails } from "../../ContextAPI/BlogContext";
import { useUserAuth } from "../../ContextAPI/UserAuthContext";


const PreviewBlogs = () => {

    const { blog_id } = useParams();
    const { userBlogs } = useBlogDetails();
    const { userDetails } = useUserAuth();
    
    return (
        <div>
            <div>
                <section className="blogs-navbar">
                    <Navbar colors={true} />
                </section>

                <main id="site-main">

                    {userBlogs.map((blog, index) => (

                        blog.blog_id === blog_id &&

                        <section className="blog-container" key={index}>
                            <article id="post">

                                <div className="headings text-center">
                                    <div className="title">
                                        <h2 className="text-title text-dark display-1">{blog.title}</h2>
                                        <p style={{padding:"10px"}}>{blog.blog_status ?
                                            <span className="blogStatus active">Active</span> :
                                            <span className="blogStatus">Inactive</span>}</p>
                                    </div>

                                    <div className="meta">
                                        <Link to="#" className="link display-2 text-secondary px-1">
                                            <i className="fas fa-user text-primary"></i> {blog.first_name}
                                        </Link>
                                        <Link to="#" className="link display-2 text-secondary px-1">
                                            <i className="fas fa-clock text-primary"></i>  {blog.date}
                                        </Link>
                                        <Link to="#" className="link display-2 text-secondary px-1">
                                            <i className="fas fa-comments text-primary"></i> {blog.likes}
                                        </Link>
                                    </div>

                                </div>

                                <div className="body">
                                    <div className="thumbnail mt-3"> <img src={blog.image} className="thumbnail" alt="" /></div>
                                    <div className="content text-dark display-2 secondary-title mt-3"><p style={{ whiteSpace: "pre-line" }}>{blog.body}</p></div>
                                </div>
                            </article>

                            <div className="post-footer mb-3">
                                <div className="hashtag">
                                    <div className="post-tags d-flex flex-wrap justify-content-center">
                                        <Link className="nav-link btn bg-light" to="#">{blog.hashtags}</Link>
                                    </div>
                                </div>

                                <div className="post-author text-center">
                                    <div className="author-avatar">
                                        <img src={userDetails.profile_image} className="rounded" alt="" />
                                    </div>

                                    <div className="author-info py-2">
                                        <h3 className="text-dark">{userDetails.first_name}</h3>

                                        <p className="text-secondary secondary-title">
                                            {userDetails.bio}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </section>
                    ))}


                </main>
                <section className="sectionFive"><Footer /></section>
            </div>

        </div>
    )
}



export default PreviewBlogs;