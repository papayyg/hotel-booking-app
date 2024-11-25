import { useState } from 'react'
import { Link } from 'react-router-dom'

const hotels = [
  {
    id: 1,
    name: "Grand Islamic Resort",
    location: "Dubai, UAE",
    price: 250,
    rating: 4.8,
    amenities: ["Prayer Room", "Halal Food", "Women's Pool"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  },
  {
    id: 2,
    name: "Crescent Heights Hotel",
    location: "Istanbul, Turkey",
    price: 180,
    rating: 4.5,
    amenities: ["Prayer Room", "Halal Food", "Family Sections"],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
  },
  {
    id: 3,
    name: "Al Safwah Royale Orchid",
    location: "Mecca, KSA",
    price: 300,
    rating: 4.9,
    amenities: ["Prayer Room", "Halal Food", "Quran in Room"],
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
  }
]

function HotelList() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedAmenities, setSelectedAmenities] = useState([])

  const amenitiesList = ["Prayer Room", "Halal Food", "Women's Pool", "Family Sections", "Quran in Room"]

  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    )
  }

  const filteredHotels = hotels.filter(hotel => {
    const meetsPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
    const meetsAmenities = selectedAmenities.length === 0 || 
      selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
    return meetsPrice && meetsAmenities
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          
          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-medium mb-2">Amenities</h3>
            <div className="space-y-2">
              {amenitiesList.map(amenity => (
                <label key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="rounded text-primary"
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Hotel List */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredHotels.map(hotel => (
              <Link
                key={hotel.id}
                to={`/hotel/${hotel.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <span className="bg-primary text-white px-2 py-1 rounded text-sm">
                      ${hotel.price}/night
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{hotel.location}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{hotel.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map(amenity => (
                      <span
                        key={amenity}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelList