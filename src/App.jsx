import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Booking from './pages/Booking.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <HashRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App
