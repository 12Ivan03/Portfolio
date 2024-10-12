
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TopTenBerlin from './pages/TopTenBerlinPage';
import SevenCircles from './pages/SevenCirclesPage';
import QualyTime from './pages/QualyTimePage';
import FooterComponent from './components/FooterComponent';
import BackToTop from './components/BackToTopBtn';

function App() {

  return (
    <>
      <NavBar />
      <BackToTop />

      <Routes>
        <Route exact path='/' element={ <HomePage /> } />
        <Route exact path='/top-10-berlin' element={ <TopTenBerlin /> } />
        <Route exact path='/seven-circles' element={ <SevenCircles /> } />
        <Route exact path='/qualy-time' element={ < QualyTime /> } />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
