import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className='w-1/3'>
            <h1 className='text-3xl text-center text-purple-600 border-2 border-blue-400 rounded-2xl py-2 my-7'>Spend Time:{readingTime}</h1>
            <div className='bg-gray-300 rounded-xl p-4'>
                <h2 className='font-bold text-2xl p-4'>Bookmark Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((b,i)=><Bookmark key={i} bookmark ={b} readingTime = {readingTime}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};


export default Bookmarks;