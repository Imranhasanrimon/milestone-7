
import PropTypes from "prop-types";
const Bookmarks = ({ titles }) => {
    return (
        <div>
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
    titles: PropTypes.object.isRequired,
}
export default Bookmarks;