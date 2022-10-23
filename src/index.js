import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import App from './App';
import PrivateComponent from './components/PrivateComponent';
import Login from './containers/login';
import MainPage from './pages/main';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" element={<MainPage />} />
    <Route path="login" element={
      <PrivateComponent loginOnly={false}>
        <Login />
      </PrivateComponent>
    } />
    {/* <Route path="register" element={
      <PrivateComponent loginOnly={false}>
        <Register />
      </PrivateComponent>
    } /> */}
  </Route>));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
