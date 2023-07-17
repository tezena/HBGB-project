import React from 'react'
import laptop from '../assets/laptop.png'

export default function Services() {
  return (
    <>
      <div className='container-fluid mt-5'>
        <hr />
        <h2 className='text-center'>Services</h2>
        <div>
          <ul className='list-unstyled d-flex flex-row justify-content-evenly flex-wrap'>
            <li>
              <img src={laptop} alt="Laptop" width='200'/>
              <p className='text-center'>Marketing</p>
            </li>
            <li>
              <img src={laptop} alt="Laptop" width='200'/>
              <p className='text-center'>Interior Design</p>
            </li>
            <li>
              <img src={laptop} alt="Laptop" width='200'/>
              <p className='text-center'>Event Organizing</p>
            </li>
          </ul>
          <ul className='list-unstyled d-flex flex-row justify-content-evenly flex-wrap'>
            <li>
              <img src={laptop} alt="Laptop" width='200'/>
              <p className='text-center'>Software and IT</p>
            </li>
            <li>
              <img src={laptop} alt="Laptop" width='200'/>
              <p className='text-center'>Graphic Design</p>
            </li>
            <li>
              <img src={laptop} alt="Laptop" width='200'/>
              <p className='text-center'>Tech Stuff</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
