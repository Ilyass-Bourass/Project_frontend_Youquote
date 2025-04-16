import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import NavBar from './components/navBar';
import Logout from './pages/logout';
import IndexUser from './pages/dashbordUser/index';
import IndexAdmin from './pages/dashbordAdmin/index';
import Home from './pages/HomePage';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/login' element ={ <LoginPage />} />
        <Route path='/logout' element ={ <Logout />} />
        <Route path='/register' element={ <RegisterPage />} />
        <Route path='/dashboardUser' element={ <IndexUser />} />
        <Route path='/dashboarAdmin' element={ <IndexAdmin />} />
        
      </Routes>
    </BrowserRouter >
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
