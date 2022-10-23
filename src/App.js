import logo from './logo.svg';
// import './App.css';
import { Outlet } from 'react-router-dom';

import HeaderRecomendation from './containers/HeaderRecomendation';
import Header from './containers/Header';
import Sliders from './containers/Sliders';
import Trending from './containers/Trending';
import Featured from './containers/Featured';
import VideoPosts from './containers/VideoPosts';
import TrendingToday from './containers/TrendingToday';
import MainPosts from './containers/MainPosts';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <HeaderRecomendation/>
      <Header/>
      <Sliders/>
      {/* <Trending/> */}
      {/* <Featured/> */}
      {/* <VideoPosts/> */}
      {/* <TrendingToday/> */}
      <MainPosts/>
      <Footer/>

      <Outlet/>

    </div>
  );
}

export default App;
