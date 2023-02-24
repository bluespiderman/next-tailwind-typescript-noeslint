
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="main">
      <div className="container mx-auto max-w-7xl">
        <div className="intro-banner-section min-h-[700px]">
          <div className="grid grid-cols-2 gap-4 mt-20">
            <div className="flex flex-col items-start justify-center">
              <h6 className="font-[Inter] text-2xl mb-4">Hello,<span className="text-primary"> I'm</span></h6>
              <h2 className="font-[Inter] text-7xl text-primary font-bold mb-4">Emmett Jack</h2>
              <h6 className="font-[Inter] text-2xl mb-4">Full Stack & Mobile App Developer</h6>
              <h6 className="max-w-lg mb-8 text-xl">I am committed to finding innovative solutions and continuously experimenting to help my clients achieve their goals.</h6>
              <button className="px-6 py-3 rounded-md bg-primary">Let's talk</button>
              <div className="flex mt-6">
                <span className="mr-7">Check out My</span>
                <div className="flex items-center justify-center">
                  <div className="bg-[url('/assets/svg/intro-banner-social-links.svg')] bg-contain bg-no-repeat p-3 mr-5">
                    <FaFacebookF size="15" className="text-white" />
                  </div>
                  <div className="bg-[url('/assets/svg/intro-banner-social-links.svg')] bg-contain bg-no-repeat p-3 mr-5">
                    <FaTwitter size="15" className="text-white" />
                  </div>
                  <div className="bg-[url('/assets/svg/intro-banner-social-links.svg')] bg-contain bg-no-repeat p-3 mr-5">
                    <FaInstagram size="15" className="text-white" />
                  </div>
                  <div className="bg-[url('/assets/svg/intro-banner-social-links.svg')] bg-contain bg-no-repeat p-3 mr-5">
                    <FaLinkedin size="15" className="text-white" />
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/avatar.png"
                alt="intro banner"
                className="intro-banner-avatar"
                width={500}
                height={636}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center services-section align-center">
          <h6 className="mb-5">My Services</h6>
          <h2 className="mb-20 text-4xl font-bold text-primary">What I Do</h2>
          <div className="grid grid-cols-3 gap-20">
            <div className="p-8 border-2 rounded-3xl border-sky-800 shadow-[0_4px_20px_20px_rgba(93,173,236,0.23)]">
              <img
                src="assets/images/service1.png"
                alt="services"
                className="mx-auto mt-6"
                width={195}
                height={143}
              />
              <h5 className="mt-8 mb-10 text-center">Full Stack Developer</h5>
              <h6 className="mb-6 text-center text-white text-opacity-60">strive to create visually impact designs that effectively communicate ,messages & meet their unique needs.</h6>
            </div>
            <div className="p-8 border-2 rounded-3xl border-sky-800 shadow-[0_4px_20px_20px_rgba(93,173,236,0.23)]">
              <img
                src="assets/images/service2.png"
                alt="services"
                className="mx-auto mt-6"
                width={195}
                height={143}
              />
              <h5 className="mt-8 mb-10 text-center">Mobile Developer</h5>
              <h6 className="mb-6 text-center text-white text-opacity-60">strive to create visually impact designs that effectively communicate ,messages & meet their unique needs.</h6>
            </div>
            <div className="p-8 border-2 rounded-3xl border-sky-800 shadow-[0_4px_20px_20px_rgba(93,173,236,0.23)]">
              <img
                src="assets/images/service3.png"
                alt="services"
                className="mx-auto mt-6"
                width={195}
                height={143}
              />
              <h5 className="mt-8 mb-10 text-center">Project Manage</h5>
              <h6 className="mb-6 text-center text-white text-opacity-60">strive to create visually impact designs that effectively communicate ,messages & meet their unique needs.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
