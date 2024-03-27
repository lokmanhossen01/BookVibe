import { useParams } from "react-router-dom";

const BookDetails = ({ books }) => {
    const {bookId} = useParams();
    const book = books.find(book => book.bookId === bookId);
  
    if (!book) {
      return <div>Book not found</div>;
    }

    return(
        <div className="book-details">
        <img src={book.image} alt={book.bookName} />
        <div>
            <p>Title: {book.bookName}</p>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Review: {book.review}</p>
            {/* <p>Tags: {book.tags.join(', ')}</p> */}
            <p>Total Pages: {book.totalPages}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Year of Publishing: {book.yearOfPublishing}</p>
            <p>Rating: {book.rating}</p>
            <button>Read</button>
            <button>Wishlist</button>
        </div>
        </div>
    );
};

export default BookDetails;