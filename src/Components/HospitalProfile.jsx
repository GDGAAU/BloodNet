import Footer from "./Footer"
import Navbar from "./Navbar"
import { MapPin, Phone, Mail, Clock, Shield, Users, CreditCard, Heart, Calendar } from "lucide-react"

function HospitalProfile() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center pb-12">
        {/* Hospital Banner */}
        <div className="w-full bg-gradient-to-r from-purple-900 via-red-700 to-red-600 text-white py-16 px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500 opacity-10 rounded-full"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">St. Mary's Medical Center</h1>
            <p className="mt-2 text-purple-100 max-w-2xl">
              Providing exceptional healthcare and blood services to our community since 1985
            </p>
          </div>
        </div>

        {/* Hospital Details Card */}
        <div className="bg-white w-11/12 md:w-4/5 lg:w-3/4 p-8 rounded-xl shadow-xl mt-8 flex flex-col border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Hospital Image */}
            <div className="w-full md:w-1/3 bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-lg overflow-hidden relative mb-6 md:mb-0">
              <img
                src="/sample/src/assets/10130.jpg"
                alt="Hospital Building"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center text-white">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Open Now</span>
                </div>
              </div>
            </div>

            {/* Hospital Information */}
            <div className="md:ml-8 flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Shield className="h-5 w-5 text-purple-600 mr-2" />
                Hospital Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>123 Health Street, Medical District, City, State 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                  <span>contact@stmarysmedical.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Emergency Blood Bank: Available 24/7</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                  <span>Specialized Blood Storage Facilities</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Blood Donation Camps Hosted Monthly</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                  <span>Accepts All Major Insurance Plans</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  Certified
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  24/7 Service
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  Blood Bank
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                  Emergency Care
                </span>
              </div>
            </div>
          </div>

          {/* Blood Availability Section */}
          <div className="mt-10">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="font-bold text-xl text-gray-800">Current Blood Stock Availability</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4 flex items-center">
              <Clock className="h-4 w-4 mr-1 text-gray-400" />
              Live updates as of today at 10:30 AM
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <BloodTypeCard type="A+" units={12} color="bg-gradient-to-r from-red-900 to-red-800" />
                <BloodTypeCard type="A-" units={8} color="bg-gradient-to-r from-red-800 to-red-700" />
                <BloodTypeCard type="B+" units={15} color="bg-gradient-to-r from-red-700 to-red-600" />
                <BloodTypeCard type="B-" units={5} color="bg-gradient-to-r from-red-600 to-red-500" />
                <BloodTypeCard type="O+" units={20} color="bg-gradient-to-r from-red-500 to-red-400" />
                <BloodTypeCard type="O-" units={7} color="bg-gradient-to-r from-red-400 to-red-300" />
                <BloodTypeCard type="AB+" units={10} color="bg-gradient-to-r from-red-300 to-red-200" />
                <BloodTypeCard type="AB-" units={4} color="bg-gradient-to-r from-red-200 to-red-100" />
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Need blood urgently? Contact our emergency line</p>
                <div className="flex justify-center gap-4 mt-4">
                  
                  <button className="bg-red-600 text-white border border-red-200 px-6 py-3 rounded-lg shadow-sm hover:bg-red-50 transition-all duration-300">
                    Request Blood
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center">
              <div className="text-3xl font-bold text-purple-700">5,000+</div>
              <div className="text-sm text-purple-600">Donations This Year</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
              <div className="text-3xl font-bold text-blue-700">98%</div>
              <div className="text-sm text-blue-600">Satisfaction Rate</div>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
              <div className="text-3xl font-bold text-green-700">24/7</div>
              <div className="text-sm text-green-600">Emergency Service</div>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-center">
              <div className="text-3xl font-bold text-red-700">10,000+</div>
              <div className="text-sm text-red-600">Lives Saved</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

// Blood Type Card Component
function BloodTypeCard({ type, units, color }) {
  // Determine status based on units
  const getStatus = (units) => {
    if (units <= 5) return { text: "Critical", bg: "bg-red-100", text: "text-red-800" }
    if (units <= 10) return { text: "Low", bg: "bg-yellow-100", text: "text-yellow-800" }
    return { text: "Good", bg: "bg-green-100", text: "text-green-800" }
  }

  const status = getStatus(units)

  return (
    <div
      className={`${color} text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">{type}</span>
        <span className={`${status.bg} ${status.text} text-xs px-2 py-1 rounded-full font-medium`}>{status.text}</span>
      </div>
      <div className="mt-2 flex justify-between items-end">
        <span className="text-sm opacity-90">Available</span>
        <span className="text-xl font-bold">{units} Units</span>
      </div>
      <div className="mt-2 w-full bg-white/20 rounded-full h-1.5">
        <div className="bg-white h-1.5 rounded-full" style={{ width: `${Math.min(units * 5, 100)}%` }}></div>
      </div>
    </div>
  )
}

export default HospitalProfile

