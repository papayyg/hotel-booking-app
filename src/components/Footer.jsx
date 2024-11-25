function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Providing Muslim-friendly accommodations and travel experiences worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Hotels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Airport Transfers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Special Offers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@halalstays.com</li>
              <li className="text-gray-300">Phone: +1 234 567 890</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full"
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-r-md hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 HalalStays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer