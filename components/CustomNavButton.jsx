import React from 'react'

const CustomNavButton = ({title}) => {
  return (
    <button className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200'>{title}</button>
  )
}

export default CustomNavButton