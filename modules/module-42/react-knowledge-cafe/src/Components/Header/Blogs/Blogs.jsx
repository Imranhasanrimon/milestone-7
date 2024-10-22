import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookMark, handleReadMark }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:col-span-2">
            {
                blogs.map(blog => <Blog handleReadMark={handleReadMark} handleBookMark={handleBookMark} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookMark: PropTypes.func.isRequired,
    handleReadMark: PropTypes.func.isRequired,
}
export default Blogs;