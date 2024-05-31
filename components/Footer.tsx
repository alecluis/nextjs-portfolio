import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
            />
        </div>

        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Let&apos;s make dynamic web projects <span className="text-purple">together</span>
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Reach out today and let&apos;s discuss how we can achieve your goals</p>
            <p>
             <a href="mailto:alecluisfebruary@gmail.com" className="purple-text">
        alecluisfebruary@gmail.com</a>
            </p>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Alec Luis</p>
            <div className="flex items-center md:gap-3 gap-6">

            </div>
        </div>
    </footer>
  )
}

export default Footer