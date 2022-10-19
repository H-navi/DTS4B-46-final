import logo from './logo.svg';
// import './App.css';
import HeaderRecomendation from './components/HeaderRecomendation';
import Header from './components/Header';
import Sliders from './components/Sliders';
import Trending from './components/Trending';
import Featured from './components/Featured';
import VideoPosts from './components/VideoPosts';
import TrendingToday from './components/TrendingToday';
import MainPosts from './components/MainPosts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderRecomendation/>
      <Header/>
      <Sliders/>
      <Trending/>
      <Featured/>
      <VideoPosts/>
      <TrendingToday/>
      <MainPosts/>
      <Footer/>

    </div>
  );
}

export default App;
