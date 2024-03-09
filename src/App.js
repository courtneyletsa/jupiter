import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Splash from './pages/Splash';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
  );
}

export default App;
