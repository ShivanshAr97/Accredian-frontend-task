import React from 'react'
import Button from './Button'
import hero from "../hero.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  const storage = localStorage.getItem("formData")
  return (
    <div className='flex mx-40 border shadow-xl rounded-xl my-4 tracking-wide  justify-between'>
      <div className='items-center align-middle mx-12 my-12'>
        <h1 className='text-4xl font-bold my-2'>Let's Learn & Earn</h1>
        <p className='text-xl my-2'>Get a chance to win  up-to <span className='text-blue-500 font-medium'>Rs. 15,000</span></p>
        {storage?<Link to="/dashboard"><button>Refer Now</button></Link>:<Link to="/login"><button>Refer Now</button></Link>}
      </div>
      <img src={hero} className='h-60' alt="" />
    </div>
  )
}

export default Hero