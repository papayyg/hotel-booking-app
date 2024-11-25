import { Link } from 'react-router-dom'

function Home() {
  const hotelImage = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a"
  ]
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Muslim-Friendly Travel Experience
            </h1>
            <p className="text-xl mb-8">
              Discover hotels that cater to your values and needs
            </p>
            <Link
              to="/hotels"
              className="bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-dark"
            >
              Find Hotels
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HalalStays?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Muslim-Friendly Facilities</h3>
              <p className="text-gray-600">
                Prayer rooms, halal food options, and gender-separated recreational areas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Airport Transfers</h3>
              <p className="text-gray-600">
                Convenient and reliable transportation to and from your hotel
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Special Packages</h3>
              <p className="text-gray-600">
                Exclusive deals and alcohol-free vacation packages
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((hotel) => (
              <div key={hotel} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={hotelImage[hotel - 1]}
                  alt="Hotel"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Luxury Hotel {hotel}</h3>
                  <p className="text-gray-600 mb-4">
                    Experience luxury with our Muslim-friendly amenities
                  </p>
                  <Link
                    to={`/hotel/${hotel}`}
                    className="text-primary font-medium hover:text-primary-dark"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home