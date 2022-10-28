import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Topics from './Pages/Topics/Topics';
import Courses from './Pages/Topics/Courses/Courses';
import Blog from './Pages/Blog/Blog';
import Faq from './Pages/FAQ/Faq';
import Login from './Pages/Login/Login';
import Category from './Pages/Category/Category';
import Register from './Pages/Register/Register';
import Access from './Pages/Topics/Courses/Access/Access';
import PrivateRoute from './Route/PrivateRoute';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/',
        element: <Topics></Topics>,
        children: [
          {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`https://assignment-10-server-side-iqbaleco.vercel.app/category/${params.id}`)
          },
          {
            path: '/courses/:id',
            element: <Courses></Courses>,
            loader: ({ params }) => fetch(`https://assignment-10-server-side-iqbaleco.vercel.app/courses/${params.id}`)
          }
        ]
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/access/:id',
        element: <PrivateRoute><Access></Access></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-iqbaleco.vercel.app/courses/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '*', element: <div className='font-bold text-2xl h-20 bg-gradient-to-r from-cyan-500 to-blue-500 bg-gradient-to-l hover:bg-gradient-to-r text-white'>
          <h1>404!</h1>
          <p>This page is not available</p>
        </div>
      }
    ]
  }

])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
