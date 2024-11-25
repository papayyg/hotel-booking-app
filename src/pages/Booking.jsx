import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Booking() {
  const location = useLocation()
  const navigate = useNavigate()
  const { hotel, room, dates, guests } = location.state || {}
  const [transfer, setTransfer] = useState(false)
  const [transferType, setTransferType] = useState('standard')

  const transferPrices = {
    standard: 50,
    luxury: 100
  }

  const nights = Math.ceil(
    (dates.checkOut - dates.checkIn) / (1000 * 60 * 60 * 24)
  )

  const roomTotal = room.price * nights
  const transferTotal = transfer ? transferPrices[transferType] : 0
  const total = roomTotal + transferTotal

  const handleConfirmBooking = () => {
    alert('Booking confirmed! Thank you for choosing HalalStays.')
    navigate('/')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Booking Confirmation</h1>

      {/* Booking Summary */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-start pb-4 border-b">
            <div>
              <h3 className="font-semibold">{hotel.name}</h3>
              <p className="text-gray-600">{hotel.location}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{room.type}</p>
              <p className="text-gray-600">${room.price}/night</p>
            </div>
          </div>

          <div className="pb-4 border-b">
            <div className="flex justify-between mb-2">
              <span>Check-in</span>
              <span>{dates.checkIn.toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Check-out</span>
              <span>{dates.checkOut.toLocaleDateString()}</span>
            </div>
          </div>

          <div className="pb-4 border-b">
            <div className="flex justify-between mb-2">
              <span>Guests</span>
              <span>{guests.adults} Adults, {guests.children} Children</span>
            </div>
            <div className="flex justify-between">
              <span>Nights</span>
              <span>{nights}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Airport Transfer */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Airport Transfer</h2>
        
        <div className="space-y-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={transfer}
              onChange={(e) => setTransfer(e.target.checked)}
              className="rounded text-primary"
            />
            <span>Add airport transfer service</span>
          </label>

          {transfer && (
            <div className="ml-6">
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="transferType"
                    value="standard"
                    checked={transferType === 'standard'}
                    onChange={(e) => setTransferType(e.target.value)}
                    className="text-primary"
                  />
                  <span>Standard Transfer - ${transferPrices.standard}</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="transferType"
                    value="luxury"
                    checked={transferType === 'luxury'}
                    onChange={(e) => setTransferType(e.target.value)}
                    className="text-primary"
                  />
                  <span>Luxury Transfer - ${transferPrices.luxury}</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Price Breakdown</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Room ({nights} nights)</span>
            <span>${roomTotal}</span>
          </div>
          {transfer && (
            <div className="flex justify-between">
              <span>Airport Transfer ({transferType})</span>
              <span>${transferTotal}</span>
            </div>
          )}
          <div className="flex justify-between pt-4 border-t text-xl font-semibold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleConfirmBooking}
        className="w-full bg-primary text-white py-3 px-4 rounded-md font-medium hover:bg-primary-dark"
      >
        Confirm Booking
      </button>
    </div>
  )
}

export default Booking