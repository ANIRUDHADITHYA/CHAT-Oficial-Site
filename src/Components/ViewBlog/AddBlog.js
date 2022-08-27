{/*import "./ViewBlog.css";
import { useEffect, useState } from "react";
import { collection, addDoc, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "./../../firebase-config"

const ViewBlog = () => {

    const [serviceList, setServiceList] = useState([{ service: "" }]);
    const [getData, setGetData] = useState({"body":[]});

    const handleServiceAdd = () => {
        setServiceList([...serviceList, { service: "" }])
        //console.log(serviceList)
    }

    const handleServiceRemove = (index) => {
        const list = [...serviceList]
        list.splice(index, 1)
        setServiceList(list)
    }

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list)
    }
    const handleServiceSubmit = () =>{   

        const createUser = async () => {
            const refDoc = collection(db, "Test")
            await addDoc(refDoc, Adddata)
        }
        const Adddata = {"body": serviceList}
        createUser()

    }

    useEffect(()=>{
        const getBlogs = async () => {

            const docRef = doc(db, "Test", "ZWsaFVVo0U3o1ggVXSkK")
            const data = await getDoc(docRef);
            //setGetData(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
            if (data.exists()) {
                setGetData(data.data());
                console.log(getData)
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
        }
            getBlogs()
            
    }, [])


    

    return (
        <div>
            <form>
                <div>
                    <label>Services</label>

                    {serviceList.map((singleService, index) => (

                        <div key={index} className="services">
                            <div>
                                <input onChange={(e) => handleServiceChange(e, index)} name="service" type="text" id="service" value={singleService.service} required></input>
                                {serviceList.length - 1 === index && serviceList.length < 4 &&
                                <div>
                                    <button onClick={handleServiceAdd} type="button" className="add-btn">
                                        <span>Add a Service</span>
                                    </button>
                                    <button onClick={handleServiceSubmit} type="button" className="add-btn">
                                        <span>submit</span>
                                    </button>
                                </div>}
                            </div>
                            <div className="second-division">
                                {serviceList.length > 1 &&
                                    <button onClick={() => { handleServiceRemove(index) }} type="button" className="revove-btn">
                                        <span>Remove</span>
                                    </button>}
                            </div>
                        </div>
                    ))}

                </div>
                <div className="output">
                    <h2>Output</h2>
                    {
                        getData.body.map((singleService, index) => (
                            <ul key={index}>
                                {singleService.service && <li>{singleService.service}</li>}
                            </ul>
                        ))
                    }
                </div>
            </form>
        </div>
    )
}



export default ViewBlog


import "./ViewBlog.css";
import { useEffect, useState } from "react";
import { collection, addDoc, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "./../../firebase-config"

const ViewBlog = () => {

    const [createBlog, setCreateBlog] = useState({
        user_id: "RA2011008020118",
        likes: "",
        blog_id: "",
        title: "",
        date: "",
        body: [{ subBody: "" }],
        
    });

    const [getData, setGetData] = useState({
        user_id: "",
        likes: "",
        blog_id: "",
        title: "",
        date: "",
        body: [{ subBody: "" }],
    });

    const handleServiceAdd = () => {
        setCreateBlog({...createBlog, body: [...createBlog.body, { subBody: "" }]})
        //console.log(serviceList)
    }

    const handleServiceRemove = (index) => {
        const list = [...createBlog.body]
        list.splice(index, 1)
        setCreateBlog({...createBlog, body: list })
    }

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target
        const list = [...createBlog.body];
        list[index][name] = value;
        setCreateBlog({...createBlog, body: list })
    }
    const handleServiceSubmit = () =>{   

        const createUser = async () => {
            const refDoc = collection(db, "Test")
            await addDoc(refDoc, createBlog)
        }
        createUser()

    }

    const handleChange = (event) => {
        const {name,value} = event.target
        setCreateBlog((preValues) => {
            return {
                ...preValues,
                [name]:value,
            }
        })
    }

    useEffect(()=>{
        const getBlogs = async () => {

            const docRef = doc(db, "Test", "jPBMu88IRaJthGB22oN7")
            const data = await getDoc(docRef);
            //setGetData(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
            if (data.exists()) {
                setGetData(data.data());
                console.log(getData)
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
        }
            getBlogs()
            
    }, [])


    

    return (
        <div>
            <form>
                <div>
                    <label>Add Blog</label>

                            <div className="otherFields">
                                <label>Title</label>
                                <input onChange={(e)=> handleChange(e)} name="title" type="text" value={createBlog.title} required />

                                <label>USER ID</label>
                                <input onChange={(e)=> handleChange(e)} name="user_id" type="text" value={createBlog.user_id} required />

                                
                            </div>

                    {createBlog.body.map((fields, index) => (

                        <div key={index}>
                            

                            <div  className="body">
                                <div>
                                    <input onChange={(e) => handleServiceChange(e, index)} name="subBody" type="text" value={fields.subBody} required></input>
                                    {createBlog.body.length - 1 === index && createBlog.body.length < 5 &&
                                    <div>
                                        <button onClick={handleServiceAdd} type="button" className="add-btn">
                                            <span>Add a Body</span>
                                        </button>
                                        <button onClick={handleServiceSubmit} type="button" className="add-btn">
                                            <span>submit</span>
                                        </button>
                                    </div>}
                                </div>
                                <div className="second-division">
                                    {createBlog.body.length > 1 &&
                                        <button onClick={() => { handleServiceRemove(index) }} type="button" className="revove-btn">
                                            <span>Remove</span>
                                        </button>}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="output">
                    <h2>Output</h2>
                    <h1>Title: {getData.title}</h1>
                    <h2>Date: {getData.date}</h2>
                    <h3>Created by {getData.user_id}</h3>
                    <h3>Likes {getData.likes}</h3>
                    <h3>Blog ID {getData.blog_id}</h3>
                    {
                        getData.body.map((desc, index) => (
                            <ul key={index}>
                                {desc.subBody && <li>{desc.subBody}</li>}
                            </ul>
                        ))
                    }
                </div>
            </form>
        </div>
    )
}



export default ViewBlog*/}