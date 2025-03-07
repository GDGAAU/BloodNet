import Navbar from "./Navbar"

function RegisterHospital() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-[800px] bg-white rounded-lg shadow-lg mx-auto my-10 overflow-hidden">
        <div className="bg-gradient-to-r from-[#9a0036] to-[#67002c] p-5 text-left text-white">
          <h2 className="text-2xl font-bold m-0">Register As Hospital</h2>
        </div>

        <form className="p-6 bg-blue-50 bg-opacity-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <label className="text-sm font-semibold text-gray-700 md:text-right md:pt-2">Organization Name</label>
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a0036] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <label className="text-sm font-semibold text-gray-700 md:text-right md:pt-2">Head Of Organization</label>
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a0036] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <label className="text-sm font-semibold text-gray-700 md:text-right md:pt-2">Email</label>
            <div className="md:col-span-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a0036] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-1"></div>
            <div className="md:col-span-2">
              <button
                type="button"
                className="w-full p-3 bg-black text-white border-none rounded-md text-base font-medium cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Current Location
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <p className="mx-4 text-sm text-gray-500 font-medium">OR</p>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <label className="text-sm font-semibold text-gray-700 md:text-right md:pt-2">City</label>
            <div className="md:col-span-2">
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a0036] transition-all appearance-none bg-white">
                <option value="">Select</option>
                <option value="Addis Ababa">Addis Ababa</option>
                <option value="Dire Dawa">Dire Dawa</option>
                <option value="Bahir Dar">Bahir Dar</option>
                <option value="Mekele">Mekele</option>
                <option value="Nazrēt">Nazrēt</option>
                <option value="Ārba Minch">Ārba Minch</option>
                <option value="Shashemenē">Shashemenē</option>
                <option value="Desē">Desē</option>
                <option value="Hawassa">Hawassa</option>
                <option value="Adama">Adama</option>
                <option value="Fiche">Fiche</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <label className="text-sm font-semibold text-gray-700 md:text-right md:pt-2">Subcity</label>
            <div className="md:col-span-2">
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9a0036] transition-all appearance-none bg-white">
                <option value="">Select</option>
                <option value="Addis Ketema">Addis Ketema</option>
                <option value="Akaki Kaliti">Akaki Kaliti</option>
                <option value="Bole">Bole</option>
                <option value="Arada">Arada</option>
                <option value="Gullele">Gullele</option>
                <option value="Kirkos">Kirkos</option>
                <option value="Kolfe Keranio">Kolfe Keranio</option>
                <option value="Lideta">Lideta</option>
                <option value="Nifas Silk Lafto">Nifas Silk Lafto</option>
                <option value="Yeka">Yeka</option>
                <option value="Lemi kura">Lemi kura</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-1"></div>
            <div className="md:col-span-2">
              <div className="flex items-start">
                <input type="checkbox" id="terms" className="mt-1 mr-3" />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-1"></div>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm"
              >
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterHospital

