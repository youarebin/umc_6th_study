import './App.css';
import Playlist from './components/playlist';
import { Navbar, Footer } from './components/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Playlist/>
      <Footer/>
    </>
  );
}

export default App;
