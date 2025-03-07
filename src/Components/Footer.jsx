function Footer() {
  return (
    <footer className="bg-[#2f3c48] py-16 text-white ">
      <div className="max-w-[1068px] mx-auto px-5 flex flex-col gap-10">
        <div className="flex justify-between items-center border-b border-white/10 pb-8">
          <div className="text-2xl font-['DM_Sans']">Ready to get started?</div>
          <button className="bg-white text-black rounded-lg px-8 py-2.5 text-xl font-bold font-['Roboto']">
            Donate
          </button>
        </div>

        <div className="flex justify-between mb-10 flex-wrap gap-8">
          <div className="flex flex-col gap-5">
            <div className="text-[#FFD2DD] text-[17px] font-['DM_Sans'] mb-2.5">Services</div>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Email Marketing
            </a>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Campaigns
            </a>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Branding
            </a>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Offline
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-[#FFD2DD] text-[17px] font-['DM_Sans'] mb-2.5">About</div>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Our Story
            </a>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Benefits
            </a>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Team
            </a>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Careers
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-[#FFD2DD] text-[17px] font-['DM_Sans'] mb-2.5">Help</div>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              FAQs
            </a>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-5">
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Terms & Conditions
            </a>
            <a href="#" className="text-white text-[15px] font-['DM_Sans'] no-underline cursor-pointer">
              Privacy Policy
            </a>
          </div>
          <div className="flex gap-5">
            <img src="https://dashboard.codeparrot.ai/api/image/Z8myA6wi-41-yX9g/social.png" alt="Social Media" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

