import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleBookMark, handleReadMark }) => {
    const { coverPhoto, title, authorName, authorImage, postedDate, readingTime, hashtags } = blog;
    return (
        <div className='border-b-2 mb-6'>
            <img className='w-full h-[400px] rounded-lg' src={coverPhoto} alt={title} />
            <div className='flex justify-between items-center py-8'>
                <div className='flex gap-4'>
                    <img className='w-14 h-14 rounded-full object-cover' src={authorImage} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{authorName}</h3>
                        <p className='text-gray-500 font-semibold'>{postedDate}</p>
                    </div>
                </div>

                {/* reading time */}
                <h5 className='text-gray-500 font-semibold'>{readingTime} min read
                    <button onClick={() => handleBookMark(title)} className='ml-2'><FaRegBookmark></FaRegBookmark></button>
                </h5>
            </div>
            <h1 className='text-3xl font-bold w-[80%]'>{title}</h1>
            <div className='flex gap-4 font-bold my-5'>
                {
                    hashtags.map((tag, i) => <p key={i}>{tag}</p>)
                }
            </div>
            <h6 className='text-purple-500 font-bold  mb-4'><button onClick={() => handleReadMark(readingTime)} className='underline'>Mark as read</button></h6>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func.isRequired,
    handleReadMark: PropTypes.func.isRequired,
}
export default Blog;