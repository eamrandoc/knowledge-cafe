import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";


const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {
    const {id, cover,author_img,author,posted_date, reading_time,title,hashtags } = blog
    return (
        <div className='border-b-2 py-7 space-y-3'>
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex gap-5">
                    <img className="w-10" src={author_img} alt="" />
                    <div>
                        <h5 className='font-bold'>{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    {reading_time} min ago
                    <button onClick={()=>handleBookmarks(blog)}>
                        <CiBookmarkPlus className="text-red-700 text-2xl"/>
                    </button>
                    
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <div>
                <p>{hashtags.map((h,i)=> <span className='mr-5 underline' key ={i}> <a href=""> #{h}</a> </span>)}</p>
            </div>
            <p className='underline text-blue-600' onClick={()=>handleMarkAsRead(reading_time,id)}><a href="#">Mark As Read</a></p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};


export default Blog;

