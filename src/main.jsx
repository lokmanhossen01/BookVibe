import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import OurTeam from './Components/OurTeam/OurTeam.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Root from './Components/Root/Root.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import SignIn from './Components/SingIn/SignIn.jsx';
// import Books from './Components/Books/Books.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:  <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/Books.json')

      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
      }, 
      {
        path: '/pagestoread',
        element: <PagesToRead></PagesToRead>
      }, 
      {
        path: '/testimonial',
        element: <Testimonial></Testimonial>
      }, 
      {
        path: '/OurTeam',
        element: <OurTeam></OurTeam>
      }, 
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }, 
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
