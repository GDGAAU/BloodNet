import Navbar from "./Navbar"
import Footer from "./Footer"

const collaborators = [
  { name: "NCC", color: "#d2d2d2" },
  { name: "NSS", color: "#b6b5b5" },
  { name: "YMCA", color: "#e3e3e3" },
]

function Home() {
  return (
    <>
      <div className="font-['Poppins'] bg-gradient-to-r from-purple-700 to-red-500 min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="  relative flex justify-center items-center text-center min-h-[60vh] p-12 overflow-hidden">
          <img src="/sample/src/assets/blood_net_bg.jpg" alt="" />

          <div className="max-w-[500px]">
            <h1 className="text-4xl font-bold">BloodNet</h1>
            <p className="my-4 text-white">
              Saving lives by connecting blood donors to those in urgent need— anytime, anywhere.
            </p>

            {/* Call to Action Button */}
            <button
        onClick={() => navigate("/register-donor")}
        className=" py-2 px-6 bg-white cursor-pointer text-black rounded-md font-black hover:bg-gray-200"
      >
        Donate Now
      </button>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center w-full min-w-[300px] max-w-[1345px] px-4 py-16 bg-white rounded-lg mx-auto my-8 shadow-lg hover:-translate-y-1 transition-transform duration-300">
          <h1 className="font-['Roboto'] font-bold text-3xl text-black mb-5">Our Mission</h1>
          <p className="font-['Roboto'] font-light text-base tracking-wide text-[#3c3c3c] text-center max-w-[1230px]">
            Our mission is to save lives by creating a seamless, real-time connection between blood donors and those in
            urgent need. We empower communities to respond swiftly to emergencies, ensuring that no one suffers due to a
            lack of accessible blood donations. Through innovative technology and a commitment to inclusivity, we strive
            to build a global network of heroes who are ready to donate blood and make a life-saving difference.
          </p>
        </div>

        <div className="w-full min-h-[485px] py-10 px-5 flex flex-col items-center">
          <h2 className="text-4xl font-['Manrope'] font-bold text-black mb-10">Our Collaborators</h2>
          <div className="flex justify-center gap-8 flex-wrap w-full max-w-[1235px]">
            {collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="w-[341px] h-[316px] bg-white rounded-lg flex justify-center items-center shadow-md hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
              >
                <span className="text-5xl font-['Roboto'] font-bold" style={{ color: collaborator.color }}>
                  {collaborator.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-5">
            <div className="w-2 h-2 rounded-full bg-black cursor-pointer"></div>
            <div className="w-2 h-2 rounded-full bg-[#D9D9D9] cursor-pointer hover:bg-gray-400 transition-colors"></div>
            <div className="w-2 h-2 rounded-full bg-[#D9D9D9] cursor-pointer hover:bg-gray-400 transition-colors"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home

