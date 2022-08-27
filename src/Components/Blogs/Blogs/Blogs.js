import Navbar from "../../Navbar/Navbar"
import "./Blogs.css"
import Footer from "../../Footer/Footer"
import { Masonry } from '@mui/lab';
import { Link } from "react-router-dom";
import { useBlogDetails } from "../../Accounts/ContextAPI/BlogContext";


const Blogs = () => {

    const { blogsData } = useBlogDetails();

    return (
        <div>
            <section className="blogs-navbar">
                <Navbar colors={true} />
            </section>


            <main id="site-main">

                <section id="posts">
                    <div className="blog-container">
                        <div className="grid">

                            <Masonry columns={3} spacing={2}>
                                {blogsData.map((blog, index) => (
                                    blog.blog_status &&

                                    <div className="grid-item" key={index} >
                                        <article className="article">
                                            <div className="blog-card">
                                                <div className="overflow-img">
                                                    <Link to={"/blogs/" + blog.blog_id}>
                                                        <img src={blog.image} className="img-fluid" alt="" />
                                                    </Link>
                                                </div>
                                                <div className="blog-card-body text-center px-1">
                                                    <Link to={"/blogs/" + blog.blog_id} className="text-title display-1 text-dark">
                                                        {blog.title}
                                                    </Link>
                                                    <p className="secondary-title text-secondary display-3">
                                                        <span><i className="far fa-clock text-primary"></i> {blog.date}</span>
                                                        <span><i className="far fa-comments text-primary"></i> {blog.likes}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>

                                ))}
                            </Masonry>


                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary secondary-title text-light">Load More Posts...</button>
                        </div>
                    </div>
                </section>
            </main>
            <section className="sectionFive"><Footer /></section>

        </div>
    )
}


export default Blogs;