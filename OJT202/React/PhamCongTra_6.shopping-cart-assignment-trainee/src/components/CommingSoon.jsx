import React from 'react'
import commingSoon from '../assets/images/comming-soon.png'
const CommingSoon = () => {
  return (
    <div className="flex items-center justify-end h-screen ">
        <img
          src={commingSoon}
          alt="comingSoon"
          className="w-auto max-w-md md:max-w-lg"
        />
      </div>
  )
}

export default CommingSoon