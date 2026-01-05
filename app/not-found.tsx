import { Home, ArrowLeft, Search, Phone, Mail } from "lucide-react"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          {/* Animated 404 */}
          <div className="relative mb-8">
            <h1 className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 leading-none animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-100">
                <Search className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto px-4">
            The page you're looking for seems to have wandered off. Don't worry, even the best builders sometimes lose their blueprints!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-200 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <Link
                href="/about"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👥</span>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">About</span>
              </Link>

              <Link
                href="/projects"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏗️</span>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Projects</span>
              </Link>

              <Link
                href="/services"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💼</span>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Services</span>
              </Link>

              <Link
                href="/jobs"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all duration-200 relative"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">✅</span>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600">Jobs</span>
                <span className="absolute -top-1 -right-1 px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-500 text-white">
                  Hiring
                </span>
              </Link>
            </div>
          </div>

          {/* Footer Text */}
          <p className="mt-8 text-xs sm:text-sm text-gray-500">
            Need help? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium underline">Get in touch</Link> with our team
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound