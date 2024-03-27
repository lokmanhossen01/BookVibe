import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBooks = () => {
    return(
        <div>

            <div className="text-center font-work font-bold text-28 rounded-lg bg-opacity-5 bg-black p-4 mb-4">
                    <h1 className="text-center font-work font-bold text-28 leading-normal">Books</h1>
            </div>

            {/* dropdown list */}
            <div className="text-center">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 inline-flex  px-24 py-8  justify-center items-center space-x-16 rounded-8 bg-green-500 text-center font-work font-semibold text-white text-18">Sort By <MdOutlineArrowDropDown /></div> 
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52  
                    text-center font-work font-normal text-opacity-80 text-sm leading-28 rounded-8 bg-opacity-5 bg-black">
                        <li><Link>Rating</Link></li>
                        <li><Link>Number of pages</Link></li>
                        <li><Link>Publisher year</Link></li>
                    </ul>
                </div>
            </div>


            <div role="tablist" className="tabs tabs-bordered ">
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content p-10">
                    Read Books
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content p-10">
                    WishList Books
                </div>
            </div>
        </div>
    );
};
export default ListedBooks;