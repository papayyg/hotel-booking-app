import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const hotelData = {
  id: 1,
  name: "Grand Islamic Resort",
  location: "Dubai, UAE",
  description: "Experience luxury with our Muslim-friendly amenities and world-class service. Located in the heart of Dubai, our resort offers everything you need for a comfortable and memorable stay.",
  rating: 4.8,
  amenities: [
    "Prayer Room",
    "Halal Food",
    "Women's Pool",
    "Family Sections",
    "Quran in Room",
    "Qibla Direction",
    "Airport Transfer"
  ],
  rooms: [
    {
      id: 1,
      type: "Deluxe Room",
      price: 250,
      capacity: "2 Adults + 2 Children",
      amenities: ["King Bed", "City View", "Free WiFi"]
    },
    {
      id: 2,
      type: "Family Suite",
      price: 400,
      capacity: "4 Adults + 2 Children",
      amenities: ["2 Bedrooms", "Living Room", "Kitchen"]
    }
  ],
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
  ]
}

function HotelDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [checkIn, setCheckIn] = useState(new Date())
  const [checkOut, setCheckOut] = useState(new Date())
  const [guests, setGuests] = useState({ adults: 2, children: 0 })
  const [activeImage, setActiveImage] = useState(0)

  const handleBooking = () => {
    if (!selectedRoom) return
    navigate(`/booking/${id}`, {
      state: {
        hotel: hotelData,
        room: selectedRoom,
        dates: { checkIn, checkOut },
        guests
      }
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hotel Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{hotelData.name}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          <span>{hotelData.location}</span>
          <span>•</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1">{hotelData.rating}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative h-96">
          <img
            src={hotelData.images[activeImage]}
            alt={hotelData.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {hotelData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${hotelData.name} ${index + 1}`}
              className="w-full h-44 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hotel Info */}
        <div className="md:col-span-2">
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-600 mb-6">{hotelData.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Muslim-Friendly Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {hotelData.amenities.map(amenity => (
                <div key={amenity} className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Room Types</h2>
            <div className="space-y-4">
              {hotelData.rooms.map(room => (
                <div
                  key={room.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedRoom?.id === room.id ? 'border-primary bg-primary/5' : 'hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{room.type}</h3>
                    <span className="text-lg font-semibold">${room.price}/night</span>
                  </div>
                  <p className="text-gray-600 mb-2">{room.capacity}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map(amenity => (
                      <span
                        key={amenity}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking Form */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-in Date
                </label>
                <DatePicker
                  selected={checkIn}
                  onChange={date => setCheckIn(date)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-out Date
                </label>
                <DatePicker
                  selected={checkOut}
                  onChange={date => setCheckOut(date)}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adults
                  </label>
                  <select
                    value={guests.adults}
                    onChange={e => setGuests({ ...guests, adults: parseInt(e.target.value) })}
                    className="w-full p-2 border rounded-md"
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Children
                  </label>
                  <select
                    value={guests.children}
                    onChange={e => setGuests({ ...guests, children: parseInt(e.target.value) })}
                    className="w-full p-2 border rounded-md"
                  >
                    {[0, 1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleBooking}
                disabled={!selectedRoom}
                className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                  selectedRoom
                    ? 'bg-primary hover:bg-primary-dark'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {selectedRoom ? `Book Now - $${selectedRoom.price}/night` : 'Select a Room'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDetail