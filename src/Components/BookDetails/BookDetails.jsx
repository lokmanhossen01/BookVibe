import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import { useLoaderData } from "react-router-dom";

const BookDetails = ({ books }) => {


    const { bookId } = useParams();
    const book = books.find(book => book.bookId === parseInt(bookId));
  
    if (!book) {
      return <div>Book not found</div>;
    }
  
    const { bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    return(
        <div className="book-details">
        <img src={book.image} alt={bookName} />
        <div>
          <h2>{bookName}</h2>
          <p>By: {author}</p>
          <hr />
          <p>{category}</p>
          <hr />
          <p>Review: {review}</p>
          <p>Tags: {tags.join(', ')}</p>
          <p>Number of Pages: {totalPages}</p>
          <p>Publisher: {publisher}</p>
          <p>Year of Publishing: {yearOfPublishing}</p>
          <p>Rating: {rating}</p>
         <div className="flex gap-6">
            <button>Read</button>
            <button>Wishlist</button>
         </div>
        </div>
      </div>
    );
};

export default BookDetails;