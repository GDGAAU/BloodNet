
import { useState } from "react"
import { Bell, Mail, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function DonorProfile() {
  const [currentMonth, setCurrentMonth] = useState("December 2020")

  const donationHistory = [
    { date: "13 Dec 2020", units: "120" },
    { date: "28 Nov 2020", units: "20" },
    { date: "04 Nov 2020", units: "40" },
    { date: "15 Oct 2020", units: "310" },
  ]

  const calendar = {
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Profile and Details Section - Left Side */}
            <div className="lg:flex-grow space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-900">Dinoy Raj K</h2>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-gray-500">
                      <Bell className="h-6 w-6" />
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">About</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Full Name", value: "Dinoy Raj K" },
                      { label: "Email", value: "dinoykraj@gamil.com" },
                      { label: "District", value: "Kozhikode" },
                      { label: "Phone Number", value: "7306185390" },
                      { label: "Pincode", value: "673014" },
                      { label: "Age", value: "21" },
                      { label: "Blood Group", value: "o +ve" },
                      { label: "Address", value: "Karuvally Reenugeetham House..." },
                      { label: "Last Donation Date", value: "11 - 10 - 2021" },
                    ].map((item, index) => (
                      <div key={index} className="border-b pb-4">
                        <div className="text-sm text-gray-500">{item.label}</div>
                        <div className="mt-1 text-gray-900">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Donation History and Calendar Section - Right Side */}
            <div className="lg:w-80 space-y-6">
              {/* Donation History */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation History</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-sm font-medium text-gray-500 pb-4">Date</th>
                        <th className="text-right text-sm font-medium text-gray-500 pb-4">Blood Units</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donationHistory.map((donation, index) => (
                        <tr key={index}>
                          <td className="py-2 text-gray-900">{donation.date}</td>
                          <td className="py-2 text-right text-gray-900">{donation.units}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{currentMonth}</h3>
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronLeft className="h-5 w-5 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendar.weekDays.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {calendar.days.map((day) => (
                    <button
                      key={day}
                      className={`text-center py-2 text-sm rounded-full hover:bg-gray-100 
                        ${day === 18 ? "bg-blue-500 text-white hover:bg-blue-600" : "text-gray-900"}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  )
}

