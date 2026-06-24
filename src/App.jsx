import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Faculty from './pages/Faculty'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
  )
}

export default App
