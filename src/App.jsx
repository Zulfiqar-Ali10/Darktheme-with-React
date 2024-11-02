import './App.css';
import './index.css';
import Header from './assets/Components/Header';
import Banner from './assets/Components/Banner';
import Section from './assets/Components/Section';
import Footer from './assets/Components/Footer';
import Home from './assets/Components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/section" element={<Section />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
