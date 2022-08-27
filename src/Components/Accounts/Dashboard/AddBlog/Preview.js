
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Preview = () => {

    const [blogValues, setBlogValues] = useState({
        bio: "",
        blog_id: "",
        blog_status: false,
        body: "",
        hashtags: "",
        date: "",
        first_name: "",
        likes: 0,
        profile_image: "",
        title: "",
        user_id: "",
        image: "",
    })
    

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("tempBlog"))
        setBlogValues(data)
    },[])

    

    return (
            <div>
                <div>
                    {/*<section className="blogs-navbar">
                        <Navbar colors={true} />
                    </section>*/}
    
                    <main id="site-main">
    
    
                        <section className="blog-container">
                            <article id="post">
    
                                <div className="headings text-center">
                                    {/*<div className="category">
                                        <Link to="#" className="nav-link">Travel</Link>
                                    </div>*/}
    
                                    <div className="title">
                                        <h2 className="text-title text-dark display-1">{blogValues.title}</h2>
                                    </div>
                                    
    
                                    <div className="meta">
                                        <Link to="#" className="link display-2 text-secondary px-1">
                                            <i className="fas fa-user text-primary"></i> {blogValues.first_name}
                                        </Link>
                                        <Link to="#" className="link display-2 text-secondary px-1">
                                            <i className="fas fa-clock text-primary"></i>  {blogValues.date}
                                        </Link>
                                        <Link to="#" className="link display-2 text-secondary px-1">
                                            <i className="fas fa-comments text-primary"></i> {blogValues.likes}
                                        </Link>
                                    </div>
    
                                </div>
                                
                                <div className="body">                               
                                    
                                    {<div className="thumbnail mt-3"> <img src={blogValues.image} className="thumbnail" alt="" /></div>}                            
                                    
                                    <div className="content text-dark display-2 secondary-title mt-3"><p><span style={{whiteSpace: "pre-line"}}>{blogValues.body}</span></p></div>
                                   
                                    
                                    
                                </div>
                            
                            </article>
    
                            <div className="post-footer mb-3">
                                {/*<div className="hashtag">
                                    <div className="post-tags d-flex flex-wrap justify-content-center">
                                    {
                                        blogData.hashtags.map((tag, index) => (
                                            
                                            tag.category && <Link key={index} className="nav-link btn bg-light" to="#">{tag.category}</Link>
                                            
                                        ))
                                    }
                                    </div>
                                </div>*/}
    
                                <div className="post-author text-center">
                                    <div className="author-avatar">
                                        <img src={blogValues.profile_image} className="rounded" alt="" />
                                    </div>
    
                                    <div className="author-info py-2">
                                        <h3 className="text-dark">{blogValues.first_name}</h3>
    
                                        <p className="text-secondary secondary-title">
                                            {blogValues.bio}
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
                    {/*<section className="sectionFive"><Footer/></section>*/}
                </div>
    
            </div>
    )
}


export default Preview;