import './App.css';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import RootLayout from './pages/Root';
import Sport from './pages/Sport';
import Viral from './pages/Viral';
import Health from './pages/Health';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import UserAccesPage from './pages/UserAccesPage';
import NewsDetail from './pages/NewsDetail';
import { auth } from './firebase'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isUser } from './store/slices/loginSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const userName = user && user.toJSON()
      dispatch(isUser(userName))
    })
    return () => unsubscribe()
  }, [dispatch])


  const router = createBrowserRouter([{
    path: '',
    element: <RootLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'sport', element: <Sport /> },
      { path: 'health', element: <Health /> },
      { path: 'viral', element: <Viral /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'login', element: <UserAccesPage /> },
      { path: 'signupAdm', element: <UserAccesPage /> },
      { path: ':category/:id', element: <NewsDetail /> }
    ]
  }])
  return (
    <div><RouterProvider router={router} /></div>
  );
}

export default App;
