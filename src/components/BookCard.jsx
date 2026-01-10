import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function BookCard({ book }) {
  const navigate = useNavigate();

  const openForm = () => {
    navigate(
      `/details?book_id=${book._id}&page_count=${book.page_count}&min_photos=${book.min_required_photos}`
    );
    // this route to enable when to upload a whole scene document to s3 and to db
    // navigate(
    //   `/sceneUpload?book_id=${book._Id}&page_count=${book.page_count}&min_photos=${book.min_required_photos}`
    // );
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* IMAGE */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={book.cover_photo}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gender Badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold
            ${
              book.gender === "boy"
                ? "bg-blue-500 text-white"
                : book.gender === "girl"
                ? "bg-pink-500 text-white"
                : "bg-yellow-400 text-blue-900"
            }
          `}
        >
          {book.gender === "boy"
            ? "For Boys"
            : book.gender === "girl"
            ? "For Girls"
            : "Unisex"}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col h-full">
        <span className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold w-fit">
          Ages {book.age_group}
        </span>

        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {book.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {book.description}
        </p>

        <button
          onClick={openForm}
          className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-all"
        >
          Personalize
        </button>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    cover_photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age_group: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    page_count: PropTypes.number.isRequired,
    min_required_photos: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookCard;
