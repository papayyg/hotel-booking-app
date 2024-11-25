import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HotelList from './pages/HotelList'
import HotelDetail from './pages/HotelDetail'
import Booking from './pages/Booking'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App