
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
    
                    <main id="site-main">
    
    
                        <section className="blog-container">
                            <article id="post">
    
                                <div className="headings text-center">
    
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
    
                                <div className="post-author text-center">
                                    <div className="author-avatar">
                                        <img src={blogValues.profile_image} className="rounded" alt="" />
                                    </div>
    
                                    <div className="author-info py-2">
                                        <h3 className="text-dark">{blogValues.first_name}</h3>
    
                                        <p className="text-secondary secondary-title">
                                            {blogValues.bio}
                                        </p>
    
                                    </div>
    
                                </div>
                     
    
                            </div>
    
                        </section>
    
                        
                    </main>
                </div>
    
            </div>
    )
}


export default Preview;