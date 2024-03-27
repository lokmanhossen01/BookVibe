import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookDetails } from "../Utility/localstorage";

const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    const bookIdInt = parseInt(bookId);

    const book = books.find(book => book.bookId === bookIdInt);

    // console.log(books, bookId);
    // console.log(book);

    const handleReadBtn = () => {
        // console.log('Hello')
        saveBookDetails(bookIdInt);
        toast('You have applied successfully')
    }
    const handleWishlistBtn = () => {
        // console.log('Hello')
        saveBookDetails(bookIdInt);
        toast('You have applied successfully')
    }


    return(
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{book.bookName}</h1>
                <p className="py-6">By: {book.author}</p>

                <hr />

                <p>{book.category}</p>
                <hr />
                <div>
                    <p>Review: {book.review}</p>
                </div>

                <div>
                   Tag 
                   {book.tags}
                </div>
                <hr />

                <div>
                    <p>Number of Pages: {book.totalPages}</p>

                    <p>Publisher: {book.publisher}</p>
                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                    <p>Rating: {book.rating}</p>
                </div>

                <div>
                    <button onClick={handleReadBtn} className="btn btn-primary mr-4">
                        Read
                    </button>
                    <button onClick={handleWishlistBtn} className="btn btn-primary">Wishlist</button>
                </div>
                </div>
                <ToastContainer />
            </div>
            </div>
        </div>
    )
}
export default BookDetails;