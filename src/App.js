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
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/courses')
      },
      {
        path: '/',
        element: <Topics></Topics>,
        children: [
          {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
          },
          {
            path: '/courses/:id',
            element: <Courses></Courses>,
            loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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
        path: '/access',
        element: <PrivateRoute><Access></Access></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
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
