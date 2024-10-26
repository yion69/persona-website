import './App.css'
import LandingPage from './components/pages/LandingPage';
import MbtiInfo from './components/pages/MbtiInfoPage';
import MbtiPage from './components/pages/MbtiPage'; 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mbti' element={<MbtiPage/>} />
        <Route path='/mbti/info' element={ <MbtiInfo />} />
      </Routes>
    </Router>
  )
}

export default App
