import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then (data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            {/* <h1>Blogs Total{blogs.length}</h1> */}
            {
                blogs.map(b=><Blog handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead} blog = {b} key = {b.id}></Blog>)
            }
            
            
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blogs;