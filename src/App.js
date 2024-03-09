import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Splash from './pages/Splash';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
