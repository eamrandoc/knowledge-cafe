import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-gray-300'>
            <h2 className='bg-slate-100 p-4 m-3 rounded-xl text-xl'>{title}</h2>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};


export default Bookmark;

