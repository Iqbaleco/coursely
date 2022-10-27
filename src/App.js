import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Topics from './Pages/Topics/Topics';
import Courses from './Pages/Topics/Courses/Courses';
import Blog from './Pages/Blog/Blog';
import Faq from './Pages/FAQ/Faq';
import Login from './Pages/Login/Login';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/topics',
        element: <Topics></Topics>,
        children: [
          {
            path: '/topics',
            element: <Courses></Courses>
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
        path: 'login',
        element: <Login></Login>
      }
    ]
  }

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
