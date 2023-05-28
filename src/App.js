// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Pages/Register/Register';
// import Landing from './Components/Pages/LandingPage/Landing';
import Profile from './Components/Pages/Profile/Profile';
import Login from './Components/Pages/Login/Login';
import Navbar from './Components/Static/Navbar/Navbar';
import NotFound from './Components/Static/NotFound';
import PlayList from './Components/Pages/List/List';
import Category from './Components/Pages/Uploads/Categories/Category';
import UploadSingle from './Components/Pages/Uploads/Upload/UploadSingle';
import UploadEp from './Components/Pages/Uploads/Upload/UploadEp';
import MobileNav from './Components/Static/Navbar/MobileNav/MobileNav';
import UploadAlbum from './Components/Pages/Uploads/Upload/UploadAlbum';
import LandingPage2 from './Components/Pages/LandingPage2.0/LandingPage2.0';
import Player from './Components/Player/Player';
import UserUploads from './Components/Pages/Uploads/UserUploads/UserUploads';
import MoreDetails from './Components/Pages/MoreDetails/MoreDetails';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

function App() {
  TimeAgo.addDefaultLocale(en)
  TimeAgo.addLocale(ru)
  
  return (
  <>
  <Navbar/>
  <Routes>
    <Route>
      <Route path='/' element={<LandingPage2/>}/>
      <Route path="Register" element={<Register/>} />
      <Route path='Profile' element={<Profile/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='playlist' element={<PlayList/>}/>
      <Route path='category' element={<Category/>}/>
      <Route path='uploadSingle' element={<UploadSingle/>}/>
      <Route path='/uploadEp' element={<UploadEp/>}/>
      <Route path='/uploadAlbum' element={<UploadAlbum/>}/>
      <Route path='/useruploads' element={<UserUploads/>}/>
      <Route path='/moredetails' element={<MoreDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  </Routes>
  <Player />
  <MobileNav/>

  </>
  );
}

export default App;
