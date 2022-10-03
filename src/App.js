import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './Layout/Main';
import User from './components/Users/User';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const router = createBrowserRouter([
    {path: '/',
     element: <Main></Main>,
      children:[
        {path: '/home', element: <Home></Home>},
        {path: '/products', element: <Products></Products>},
        {path: '/about', element: <About></About>},
        {path: '/users',
        loader: async() => {
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
         element: <User></User>},
         {path: '/contact', element: <Contact></Contact>},
         {
          path: '/userInfo/:userId', 
          element: <UserDetails></UserDetails>
         }
    ]},
    {path: '*', element: <div>Not Found 404 page     </div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;