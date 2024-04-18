// import AppRoutes from '../Routes/Routes';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';

import Home from '../Pages/Home/Home';
import News from '../Pages/News/News';
import Catalog from '../Pages/Catalog/Catalog';
import Docs from '../Pages/Docs/Docs';
import About from '../Pages/About/About';
import Contacts from '../Pages/Contacts/Contacts';

import Copyholder from '../Pages/Copyholder/Copyholder';
import Reestr from '../Pages/Reestr/Reestr';
import Ocup from '../Pages/Ocup/Ocup';
import FullNews from '../Pages/FullNews/FullNews';
import AddReq from '../User/AddReq/Addreq'


import User from '../User/User';
import MyReq from '../User/MyReq/MyReq';

import AddNews from '../Admin/AddNews/AddNews';

import  ReCAPTCHA  from "react-google-recaptcha";

import isAuth from '../Check/CheckAuth';


function App() {

  const isLoggedIn = localStorage.getItem('token');


  return <div className="App">
        <Header />
      <Routes>
      <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="catalogs" element={<Catalog />} />
          <Route path="catalogs/poisk_pravoobladateley" element={<Copyholder />} />
          <Route path="catalogs/reestr" element={<Reestr />} />
          <Route path="catalogs/inostrannye_okupy" element={<Ocup />} />
          <Route path="docs" element={<Docs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
          
          <Route path="account" element={isLoggedIn ? <User /> : <Navigate to="/authorization/auth" />} />
          <Route path="news/:id" element={<FullNews />} />
          <Route path="addnews" element={<AddNews />} />
          {/* <Route path="authorization/signup" element={<Register />} /> */}
          <Route path="authorization/auth" element={<Login />} />
          <Route path="account/myrequest" element={<MyReq />} />
          <Route path="account/newrequest" element={<AddReq />} />
      </Routes>
      <Footer />
  </div>;
}

export default App;







