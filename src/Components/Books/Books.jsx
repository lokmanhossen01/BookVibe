import { useEffect, useState } from "react";

const Books = () => {

    // const [Books, setBooks] = useState([]);

    // useEffect(() => {
    //             fetch('Books.json')
    //             .then(res => res.json())
    //             .then(data => setBooks(data));
    //         }, [])

    return(
        <div>
            <div className="text-center">
            <h3 className="text-gray-800 font-playfair text-2xl font-bold ">Books</h3>
            </div>

{/* 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                     Books.map(Book => <Book key
                       ={Books.bookId} Book={Book}>

                        </Book>)
                 }
            </div> */}
            
        </div>
    );
};

export default Books;