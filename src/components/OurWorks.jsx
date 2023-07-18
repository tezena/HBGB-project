import React from 'react'
import laptop from '../assets/laptop.png'
import { Button } from 'reactstrap'

export default function OurWorks() {
  return (
    <>
      <div className='mybg'>
      <h2 className='text-center fs-2 mytext fw-bold pt-5'>Our Works</h2>
      <ul className='list-unstyled d-flex flex-row justify-content-evenly ms-5'>
        <li className='d-flex flex-row justify-content-evenly'>
        <img src={laptop} alt="Laptop" width='200'/>
          <div className='align-self-center ms-3'>
            <p className='text-break text-white'>We provide top quality products to our customers. Join us in our endeavor to change the world. </p>
            <button className='btn btn-secondary'>dfsdf</button>
          </div>
        </li>
        <li className='d-flex flex-row justify-content-evenly'>
        <img src={laptop} alt="Laptop" width='200'/>
          <div className='align-self-center ms-3'>
            <p className='text-break text-white'>We provide top quality products to our customers. Join us in our endeavor to change the world. </p>
            <button className='btn btn-secondary'>dfsdf</button>
          </div>
        </li>
        {/* <li></li> */}
      </ul>
      <ul className='list-unstyled d-flex flex-row justify-content-evenly ms-5'>
        <li className='d-flex flex-row justify-content-evenly'>
        <img src={laptop} alt="Laptop" width='200'/>
          <div className='align-self-center ms-3'>
            <p className='text-break text-white'>We provide top quality products to our customers. Join us in our endeavor to change the world. </p>
            <button className='btn btn-secondary'>dfsdf</button>
          </div>
        </li>
        <li className='d-flex flex-row justify-content-evenly'>
        <img src={laptop} alt="Laptop" width='200'/>
          <div className='align-self-center ms-3'>
            <p className='text-break text-white'>We provide top quality products to our customers. Join us in our endeavor to change the world. </p>
            <button className='btn btn-secondary'>dfsdf</button>
          </div>
        </li>
        {/* <li></li> */}
      </ul>
      </div>

    </>
  )
}
