import "./Blog.css";
import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom"
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";


const Blog = () => {

    const { blog_id } = useParams();
    const [blogData, setBlogData] = useState({
        
        user_id: "",
        first_name: "",
        bio: "",
        profile_image: "",
        blog_id: "",               
        title: "",
        date: "",    
        body: [{ image: "", subBody: "" }],
        hashtags: [{ category: "" }],
        likes: "",

    });

    useEffect(() => {
        const getBlogData = async () => {
            const blogsData = JSON.parse(localStorage.getItem("blogsData"))            
            const filterData = blogsData.filter(blog => blog.blog_id == blog_id)
            setBlogData(filterData[0])            
        }
        getBlogData()
    }, [])




    return (
        <div>
            <div>
                <section className="blogs-navbar">
                    <Navbar colors={true} />
                </section>

                <main id="site-main">


                    <section className="blog-container">
                        <article id="post">

                            <div className="headings text-center">
                                {/*<div className="category">
                                    <Link to="#" className="nav-link">Travel</Link>
                                </div>*/}

                                <div className="title">
                                    <h2 className="text-title text-dark display-1">{blogData.title}</h2>
                                </div>

                                <div className="meta">
                                    <Link to="#" className="link display-2 text-secondary px-1">
                                        <i className="fas fa-user text-primary"></i> {blogData.first_name}
                                    </Link>
                                    <Link to="#" className="link display-2 text-secondary px-1">
                                        <i className="fas fa-clock text-primary"></i>  {blogData.date}
                                    </Link>
                                    <Link to="#" className="link display-2 text-secondary px-1">
                                        <i className="fas fa-comments text-primary"></i> {blogData.likes}
                                    </Link>
                                </div>

                            </div>
                            { blogData.body.map((desc, index) => (
                            <div key={index} className="body">                               
                                
                                {desc.image && <div className="thumbnail mt-3"> <img src={desc.image} className="thumbnail" alt="" /></div>}                               
                                
                                {desc.subBody && <div className="content text-dark display-2 secondary-title mt-3"><p>{desc.subBody}</p></div>}
                               
                                
                                
                            </div>
                            ))}
                        </article>

                        <div className="post-footer mb-3">
                            <div className="hashtag">
                                <div className="post-tags d-flex flex-wrap justify-content-center">
                                {
                                    blogData.hashtags.map((tag, index) => (
                                        
                                        tag.category && <Link key={index} className="nav-link btn bg-light" to="#">{tag.category}</Link>
                                        
                                    ))
                                }
                                </div>
                            </div>

                            <div className="post-author text-center">
                                <div className="author-avatar">
                                    <img src={blogData.profile_image} className="rounded" alt="" />
                                </div>

                                <div className="author-info py-2">
                                    <h3 className="text-dark">{blogData.first_name}</h3>

                                    <p className="text-secondary secondary-title">
                                        {blogData.bio}
                                    </p>

                                    {/*
                                        //Social Media Accounts of Blogger
                                    
                                    <div className="post-tags d-flex flex-wrap justify-content-center">
                                        <Link to="#" className="nav-link"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#" className="nav-link"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#" className="nav-link"><i className="fab fa-instagram"></i></Link>
                                        <Link to="#" className="nav-link"><i className="fab fa-dribbble"></i></Link>
                                    </div>*/}
                                </div>

                            </div>

                            {/*<div className="post-realted py-2">
                                <div className="row justify-content-center">
                                    <div className="prev">
                                        <div className="py-2">
                                            <Link to="#" className="display-2 text-dark">
                                                <i className="fas fa-chevron-left"></i>
                                                Previous Post
                                            </Link>
                                        </div>
                                        <article className="article text-center">
                                            <div className="d-flex">
                                                <Link to="#">
                                                    <img src={"assets/img9"} className="object-fit" alt="" />
                                                </Link>
                                                <div className="cart-body px-1">
                                                    <div className="category">
                                                        <Link to="#" className="link text-primary text-secondary">Fashion</Link>
                                                    </div>
                                                    <Link to="#" className="text-title display-1 text-dark">
                                                        Looking for some feedback for this rejected track
                                                        technology
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="next text-right">
                                        <div className="py-2">
                                            <Link to="#" className="display-2 text-dark">
                                                Next Post
                                                <i className="fas fa-chevron-right"></i>
                                            </Link>
                                        </div>
                                        <article className="article text-center">
                                            <div className="d-flex">
                                                <div className="cart-body px-1">
                                                    <div className="category">
                                                        <Link to="#" className="link text-primary text-secondary">Fashion</Link>
                                                    </div>
                                                    <Link to="#" className="text-title display-1 text-dark">
                                                        Looking for some feedback for this rejected track
                                                        technology
                                                    </Link>
                                                </div>
                                                <Link to="#">
                                                    <img src={"assets/img8"} className="object-fit" alt="" />
                                                </Link>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                </div>*/}                         

                        </div>

                    </section>

                    
                </main>
                <section className="sectionFive"><Footer/></section>
            </div>

        </div>
    )
}



export default Blog