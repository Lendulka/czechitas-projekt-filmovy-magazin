import MainLayout from './pages/MainLayout'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Articles from './pages/Articles'
import Movies from './pages/Movies'
import Movie from './components/Movie'
import ErrorPage from './pages/ErrorPage'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: ':movieId',
            element: <Movie />,
          }
        ]
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
