import logo from '../logo.svg';
// import './App.css';
// import { Outlet } from 'react-router-dom';

import HeaderRecomendation from '../containers/HeaderRecomendation';
import Header from '../containers/Header';
import Sliders from '../containers/Sliders';
// import Trending from './containers/Trending';
// import Featured from './containers/Featured';
// import VideoPosts from './containers/VideoPosts';
// import TrendingToday from './containers/TrendingToday';
import MainPosts from '../containers/MainPosts';
import Footer from '../containers/Footer';

function MainPage() {
  return (
    <div className="Main">
      <HeaderRecomendation/>
      <Header/>
      <Sliders/>
      {/* <Trending/> */}
      {/* <Featured/> */}
      {/* <VideoPosts/> */}
      {/* <TrendingToday/> */}
      <MainPosts/>
      <Footer/>
    </div>
  );
}

export default MainPage;
