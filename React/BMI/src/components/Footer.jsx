import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="w-full bg-gray-400 p-4  mt-auto">
        <p className="text-center text-white text-sm font-medium">
          &copy; {new Date().getFullYear()} BMI Calculator. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
