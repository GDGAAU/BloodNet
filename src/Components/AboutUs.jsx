import { Heart, Users, Calendar, Award, ArrowRight, Droplet } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 to-red-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Saving Lives Through Blood Donation
              </h1>
              <p className="text-white/80 md:text-xl">
                We're dedicated to ensuring a safe and accessible blood supply for all who need it. Every donation makes
                a difference in someone's life.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-white text-purple-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/90 transition-colors"
                >
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Learn How It Works
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900">Our Mission</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe that everyone deserves access to safe blood when they need it most. Our mission is to connect
                generous donors with patients in need, ensuring that no life is lost due to blood shortage.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="border border-purple-100 rounded-lg">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-gradient-to-r from-purple-100 to-red-100 p-3">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">Save Lives</h3>
                <p className="text-gray-500">
                  Every donation can save up to three lives and make a meaningful difference in your community.
                </p>
              </div>
            </div>
            <div className="border border-purple-100 rounded-lg">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-gradient-to-r from-purple-100 to-red-100 p-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">Build Community</h3>
                <p className="text-gray-500">
                  We bring people together through the shared goal of helping others in their time of need.
                </p>
              </div>
            </div>
            <div className="border border-purple-100 rounded-lg">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-gradient-to-r from-purple-100 to-red-100 p-3">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">Ensure Access</h3>
                <p className="text-gray-500">
                  We work tirelessly to make sure blood is available to everyone who needs it, regardless of location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-red-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900">Our Impact</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Since our founding, we've made a significant difference in countless lives through the generosity of our
                donors.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-red-600 bg-clip-text text-transparent">
                150K+
              </span>
              <span className="text-gray-500 text-center">Donations Collected</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-red-600 bg-clip-text text-transparent">
                450K+
              </span>
              <span className="text-gray-500 text-center">Lives Saved</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-red-600 bg-clip-text text-transparent">
                75+
              </span>
              <span className="text-gray-500 text-center">Donation Centers</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-red-600 bg-clip-text text-transparent">
                15
              </span>
              <span className="text-gray-500 text-center">Years of Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900">Our Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated professionals working behind the scenes to make our mission possible.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { name: "Dr. Sarah Johnson", role: "Medical Director", image: "/placeholder.svg?height=300&width=300" },
              { name: "Michael Chen", role: "Operations Manager", image: "/placeholder.svg?height=300&width=300" },
              { name: "Dr. James Wilson", role: "Research Lead", image: "/placeholder.svg?height=300&width=300" },
              { name: "Emily Rodriguez", role: "Community Outreach", image: "/placeholder.svg?height=300&width=300" },
              { name: "Robert Kim", role: "Donor Relations", image: "/placeholder.svg?height=300&width=300" },
              { name: "Dr. Lisa Patel", role: "Quality Assurance", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 rounded-full overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-purple-900">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-red-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                Why Your Donation Matters
              </h2>
              <ul className="space-y-4">
                {[
                  "Every 2 seconds, someone in the country needs blood",
                  "A single car accident victim can require up to 100 units of blood",
                  "Blood cannot be manufactured – it can only come from generous donors",
                  "Less than 10% of eligible donors actually donate blood",
                  "Most donated red blood cells must be used within 42 days",
                ].map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <Droplet className="mr-2 h-5 w-5 text-purple-600 mt-0.5" />
                    <span className="text-gray-700">{fact}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-900 to-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-purple-800 hover:to-red-500 transition-colors mt-4"
              >
                Schedule Your Donation
              </a>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Blood donation in progress"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 to-red-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Mission Today</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're donating blood, volunteering your time, or supporting our cause financially, there are
                many ways to make a difference.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-white text-purple-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/90 transition-colors"
              >
                Donate Blood
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Volunteer
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Make a Financial Gift
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900">Our Journey</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From our humble beginnings to where we are today, we've been committed to our mission of saving lives.
              </p>
            </div>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 to-red-200"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2008",
                  title: "Foundation",
                  description: "Our organization was founded with a mission to address critical blood shortages.",
                },
                {
                  year: "2012",
                  title: "Expansion",
                  description: "Opened 25 new donation centers across the country to serve more communities.",
                },
                {
                  year: "2015",
                  title: "Innovation",
                  description: "Implemented new technologies to improve blood collection and storage processes.",
                },
                {
                  year: "2018",
                  title: "Milestone",
                  description: "Celebrated our 100,000th blood donation and the lives saved as a result.",
                },
                {
                  year: "2023",
                  title: "Today",
                  description: "Continuing to grow our impact with new initiatives and partnerships.",
                },
              ].map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                  <div className="flex-1"></div>
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-900 to-red-600 shadow-lg">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="p-4 bg-white rounded-lg shadow-md border border-purple-100">
                      <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold bg-gradient-to-r from-purple-100 to-red-100 text-purple-800 rounded-full">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-bold text-purple-900">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

