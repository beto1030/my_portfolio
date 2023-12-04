import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Flashcards from './components/Flashcards';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      {/*<Route path="/about" element={<About />} />*/}
        <Route path="/abo-flashcards" element={<Flashcards />} />
      </Routes>
    </Router>

  );
}

export default App;
