'use client'
import Banner from "../layout/Banner"
import Navbar from "../layout/Navbar"


const HeroSection = () => {
  return (
    <div className="bg-[#F8F8FD]">
      {/* hero section */}
      {/* navber */}
      <section>
        <Navbar />
      </section>

      {/* hero content */}
      <section>
        {/* hero content */}

        <Banner />
      </section>
      
    </div>
  )
}

export default HeroSection
