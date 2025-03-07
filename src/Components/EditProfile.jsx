



import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Mail, Bell, RotateCw } from "lucide-react"

export default function EditProfile() {
  const [isSubmitting, setIsSubmitting] = useState(false)

 
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl">
                💧
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About Us
              </Link>
              <Link href="/find" className="text-gray-900 px-3 py-2 text-sm font-medium border-b-2 border-black">
                Find Blood
              </Link>
              <div className="relative group">
                <button className="text-gray-500 group-hover:text-gray-900 px-3 py-2 text-sm font-medium inline-flex items-center">
                  Register Now
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-500">
                <Mail className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-gray-500 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-red-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-white">Edit Profile</h1>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 w-32">
                  Full Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="First Name"
                />
              </div>
              <div className="flex items-center">
                <div className="w-32 md:hidden"></div> {/* Spacer for mobile alignment */}
                <input
                  type="text"
                  id="lastName"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 w-32">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Phone Number"
              />
            </div>

            {/* Email */}
            <div className="flex items-center">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 w-32">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Email Address"
              />
            </div>

            {/* Address */}
            <div className="flex items-start">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 w-32 pt-2">
                Address
              </label>
              <textarea
                id="address"
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Type your address here"
              />
            </div>

            {/* Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 w-32">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Age"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 w-32">
                  Blood Group
                </label>
                <select
                  id="bloodGroup"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>

            {/* District */}
            <div className="flex items-center">
              <label htmlFor="district" className="block text-sm font-medium text-gray-700 w-32">
                District
              </label>
              <input
                type="text"
                id="district"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="District"
              />
            </div>

            {/* State */}
            <div className="flex items-center">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 w-32">
                State
              </label>
              <input
                type="text"
                id="state"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="State"
              />
            </div>

            {/* PIN Code */}
            <div className="flex items-center">
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 w-32">
                PIN Code
              </label>
              <input
                type="text"
                id="pincode"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="PIN Code"
              />
            </div>

            {/* Last Donation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <label htmlFor="donationMonth" className="block text-sm font-medium text-gray-700 w-32">
                  Last Donation
                </label>
                <select
                  id="donationMonth"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="">Month</option>
                  {Array.from({ length: 12 }, (_, i) => {
                    const month = new Date(0, i).toLocaleString("default", { month: "long" })
                    return (
                      <option key={i} value={i + 1}>
                        {month}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="flex items-center">
                <div className="w-32 md:hidden"></div> {/* Spacer for mobile alignment */}
                <select
                  id="donationYear"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="">Year</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() - i
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-900 to-red-600 hover:from-purple-800 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <RotateCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

