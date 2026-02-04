import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// const books = [
//   {
//     id: 1,
//     title: "Little Child's Big Steps",
//     description:
//       "Your child joins adorable animal friends in teaching important milestones! A great keepsake of your little one's growth.",
//     ageRange: "0 to 1",
//     image:
//       "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     secondaryImage:
//       "https://images.pexels.com/photos/3662632/pexels-photo-3662632.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     animatedImage:
//       "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     theme: "water",
//     companion: "duck",
//   },
//   {
//     id: 2,
//     title: "Dinosaur Adventure",
//     description:
//       "Join your child on an exciting journey with friendly dinosaurs, where imagination and bravery lead to amazing discoveries!",
//     ageRange: "2 to 4",
//     image:
//       "https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     secondaryImage:
//       "https://images.pexels.com/photos/4503815/pexels-photo-4503815.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     animatedImage:
//       "https://images.pexels.com/photos/8533225/pexels-photo-8533225.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     theme: "adventure",
//     companion: "t-rex",
//   },
//   {
//     id: 3,
//     title: "Doctor for a Day",
//     description:
//       "Your child becomes a caring doctor, helping their teddy bear friend feel better with love and kindness!",
//     ageRange: "3 to 6",
//     image:
//       "https://images.pexels.com/photos/3662579/pexels-photo-3662579.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     secondaryImage:
//       "https://images.pexels.com/photos/3662625/pexels-photo-3662625.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     animatedImage:
//       "https://images.pexels.com/photos/8533391/pexels-photo-8533391.jpeg?auto=compress&cs=tinysrgb&w=1800",
//     theme: "medical",
//     companion: "teddy",
//   },
// ];
const server_url = "http://127.0.0.1:3000";

// const server_url = "https://storybook-render-backend.onrender.com";
function BooksList({ layout = "vertical" }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // make api call to fetch books
    getBooks();
  }, []);

  const getBooks = async () => {
    // fetch books from api and setBooks
    setLoading(true);
    try {
      const res = await axios.get(`${server_url}/api/storybook`);
      setBooks(res.data);
      // console.log(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching books:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
          <h2 className="text-xl font-semibold text-blue-900">
            Loading Books...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6">
      {/* Show heading ONLY for vertical page */}
      {layout === "vertical" && (
        <>
          <h1 className="text-5xl font-bold text-center mb-4 text-blue-900">
            Books for Kids
          </h1>
          <p className="text-2xl text-blue-800 text-center mb-12">
            Choose a magical story for your little one
          </p>
        </>
      )}

      {/* LIST CONTAINER */}
      <div
        className={
          layout === "horizontal"
            ? "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            : "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        }
      >
        {books.map((book) => (
          <div
            key={book._id}
            className={
              layout === "horizontal"
                ? "min-w-auto md:min-w-auto flex-shrink-0"
                : "transform hover:scale-105 transition-transform duration-300"
            }
          >
            {" "}
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

BooksList.propTypes = {
  layout: PropTypes.string,
};

export default BooksList;
