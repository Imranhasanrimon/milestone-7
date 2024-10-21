
const Blog = ({ blog }) => {
    const { id, coverPhoto, title, authorName, authorImage, postedDate, readingTime, hashtags } = blog;
    return (
        <div>
            <img src={coverPhoto} alt="" />
        </div>
    );
};

export default Blog;