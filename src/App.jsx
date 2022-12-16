import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Team from './routes/Team';
import SocialImpact from './routes/SocialImpact';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/socialimpact" element={<SocialImpact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
