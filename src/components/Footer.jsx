import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4">
           <div className="flex  flex-col items-center sm:flex-row  sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
             
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Movie App</span>
            </a>
            <ul className="flex flex-wrap gap-4 justify-center items-center text-sm font-medium text-gray-500  dark:text-gray-400">
              <li>
                <a href="#" className=" hover:underline  ">Linkedin</a>
              </li>
              <li>
                <a href="#" className=" hover:underline ">Githup</a>
              </li>
              <li>
                <a href="#" className="hover:underline ">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>  
          <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 my-4" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="/" className="hover:underline">Movie App</a> </span>
        </div>
      </footer>
  )
}

export default Footer