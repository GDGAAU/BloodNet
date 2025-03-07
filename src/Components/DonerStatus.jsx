
import { useState } from "react"
import { Phone, RefreshCw, AlertTriangle } from "lucide-react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function DonorStatus() {
  const [activeTab, setActiveTab] = useState("donors")

  const donors = [
    { name: "John Smith", phone: "555-123-4567", bloodType: "O+", lastDonation: "2 weeks ago" },
    { name: "Maria Garcia", phone: "555-234-5678", bloodType: "A-", lastDonation: "1 month ago" },
    { name: "David Chen", phone: "555-345-6789", bloodType: "B+", lastDonation: "3 weeks ago" },
    { name: "Sarah Johnson", phone: "555-456-7890", bloodType: "AB+", lastDonation: "2 months ago" },
    { name: "Michael Brown", phone: "555-567-8901", bloodType: "O-", lastDonation: "1 week ago" },
  ]

  const hospitals = [
    {
      name: "City General Hospital",
      address: "123 Medical Center Blvd",
      phone: "555-789-0123",
      urgentNeeds: ["O-", "B+"],
      hours: "24/7 Blood Bank",
    },
    {
      name: "Memorial Medical Center",
      address: "456 Healthcare Ave",
      phone: "555-234-5678",
      urgentNeeds: ["A+", "AB-"],
      hours: "Mon-Fri: 8am-8pm, Sat-Sun: 9am-5pm",
    },
    {
      name: "University Hospital",
      address: "789 Research Parkway",
      phone: "555-345-6789",
      urgentNeeds: [],
      hours: "Mon-Sun: 7am-9pm",
    },
    {
      name: "Children's Medical Center",
      address: "101 Pediatric Lane",
      phone: "555-456-7890",
      urgentNeeds: ["O+", "O-"],
      hours: "24/7 Blood Bank",
    },
    {
      name: "Veterans Healthcare System",
      address: "202 Service Road",
      phone: "555-567-8901",
      urgentNeeds: ["A-"],
      hours: "Mon-Fri: 7am-7pm",
    },
  ]

  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-red-600 flex flex-col">
          {/* Mobile menu button */}
          <button className="md:hidden inline-flex items-center justify-center rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        
      

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6">Donor Status Dashboard</h1>

          {/* Status Selection Tabs */}
          <div className="mb-8">
            <div className="grid w-full grid-cols-2 mb-6 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("donors")}
                className={`text-base py-2 px-4 rounded-md transition-colors ${
                  activeTab === "donors" ? "bg-white shadow-sm" : "hover:bg-gray-200"
                }`}
              >
                Blood Donors
              </button>
              <button
                onClick={() => setActiveTab("hospitals")}
                className={`text-base py-2 px-4 rounded-md transition-colors ${
                  activeTab === "hospitals" ? "bg-white shadow-sm" : "hover:bg-gray-200"
                }`}
              >
                Hospitals
              </button>
            </div>

            {activeTab === "donors" && (
              <div className="space-y-6">
                {/* Donor Information Card */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Available Blood Donors</h2>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">
                      Our network maintains a list of registered blood donors who have consented to be contacted for
                      donations. Please respect donor privacy and contact them only for legitimate donation requests.
                    </p>
                  </div>
                </div>

                {/* Donor List Card */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-200 flex flex-row items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Registered Donors</h2>
                    <button className="h-8 px-3 py-1 border border-gray-200 rounded-md text-sm font-medium bg-white hover:bg-gray-50 transition-colors flex items-center">
                      <RefreshCw className="mr-2 h-3 w-3" />
                      Refresh
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="divide-y">
                      {donors.map((donor, index) => (
                        <div key={index} className="py-3 flex justify-between items-center">
                          <div>
                            <div className="font-medium text-gray-900">{donor.name}</div>
                            <div className="text-gray-600">{donor.phone}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                              {donor.bloodType}
                            </span>
                            <button className="h-8 p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
                              <Phone className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Emergency Coordinator Notice */}
                <div className="bg-amber-50 rounded-lg border border-amber-200 shadow-sm overflow-hidden">
                  <div className="p-4 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" />
                    <p className="text-gray-700">
                      If the above contacts are not available, please call the Main Coordinator at{" "}
                      <span className="font-medium">555-911-0000</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "hospitals" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Partner Hospitals</h2>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-4">
                      These hospitals are part of our blood donation network. They maintain blood banks and can
                      facilitate donations. Hospitals with urgent needs are highlighted.
                    </p>

                    <div className="divide-y">
                      {hospitals.map((hospital, index) => (
                        <div key={index} className="py-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-gray-900">{hospital.name}</h3>
                            {hospital.urgentNeeds.length > 0 && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
                                Urgent Needs
                              </span>
                            )}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            <div className="text-gray-600">
                              <div className="mb-1">{hospital.address}</div>
                              <div>{hospital.phone}</div>
                            </div>
                            <div>
                              <div className="text-gray-600 mb-1">
                                <span className="font-medium">Hours: </span>
                                {hospital.hours}
                              </div>
                              {hospital.urgentNeeds.length > 0 && (
                                <div className="flex gap-1 flex-wrap">
                                  <span className="font-medium text-gray-700">Needed: </span>
                                  {hospital.urgentNeeds.map((type, i) => (
                                    <span
                                      key={i}
                                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200"
                                    >
                                      {type}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Donation Information</h2>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Eligibility Requirements</h3>
                      <p className="text-gray-600">
                        Generally, donors must be at least 17 years old, weigh at least 110 pounds, and be in good
                        health. Additional requirements may apply based on the specific hospital.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">What to Expect</h3>
                      <p className="text-gray-600">
                        The donation process takes about an hour from registration to completion. The actual blood draw
                        typically takes 8-10 minutes.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">After Donating</h3>
                      <p className="text-gray-600">
                        Rest for 15 minutes, stay hydrated, avoid strenuous activities for 24 hours, and wait at least
                        56 days before donating whole blood again.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      </div>
    
     <Footer/>
    </>
  )
}

