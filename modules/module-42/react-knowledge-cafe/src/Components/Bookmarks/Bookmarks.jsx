
import PropTypes from "prop-types";
const Bookmarks = ({ titles, readingTime }) => {
    return (
        <div>
            <h4 className="p-3 border rounded-md mb-3 font-semibold border-purple-500 bg-purple-100 text-purple-500">Spent time on read: {readingTime} min</h4>
            <div className="bg-gray-200 p-2 rounded-lg">
                <h1 className="text-xl mb-3">Bookmarked Blogs: {titles.length}</h1>
                {
                    titles.map((title, i) => <h2 className="bg-white mb-2 p-2 rounded-lg" key={i}>{title}</h2>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    titles: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;