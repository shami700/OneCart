import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
      
      {/* About Us Section */}
      <Title text1={'ABOUT'} text2={'US'} />
      <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>

        {/* Image */}
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <img 
            src={about} 
            alt="About OneCart" 
            className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm' 
          />
        </div>

        {/* Text */}
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
          <p className='lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px]'>
            <b>OneCart</b> was created to make shopping smarter, faster, and stress-free. 
            We bring together quality products, trending styles, and everyday essentials 
            on one trusted platform. With reliable service, secure checkout, and fast delivery, 
            we make online shopping simple and satisfying.
          </p>
          <p className='lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px]'>
            Our platform is built for modern shoppers—combining <b>style, convenience, and affordability</b>. 
            Whether you’re looking for fashion, lifestyle essentials, or the latest trends, 
            OneCart delivers everything you need with easy returns and a customer-first approach.
          </p>

          {/* Mission */}
          <p className='lg:w-[80%] w-[100%] text-[15px] text-white lg:text-[18px] mt-[10px] font-bold'>
            Our Mission
          </p>
          <p className='lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px]'>
            To redefine online shopping by connecting customers with <b>trusted products, top brands, 
            and great value</b>. At OneCart, we aim to save your time and money while ensuring 
            a smooth and enjoyable shopping journey for every lifestyle and need.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
        <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]'>

          <div className='lg:w-[33%] w-[90%] h-[250px] border border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Quality Assurance</b>
            <p>
              Every product goes through strict checks and trusted sourcing to 
              ensure you always get the best quality with complete satisfaction.
            </p>
          </div>

          <div className='lg:w-[33%] w-[90%] h-[250px] border border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Convenience</b>
            <p>
              Shop with ease—fast delivery, secure checkout, simple navigation, 
              and everything you need in one place.
            </p>
          </div>

          <div className='lg:w-[33%] w-[90%] h-[250px] border border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#bff1f9]'>Customer First</b>
            <p>
              Our dedicated support team ensures quick responses, reliable solutions, 
              and a smooth shopping experience—every time you shop.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <NewLetterBox />
    </div>
  )
}

export default About
