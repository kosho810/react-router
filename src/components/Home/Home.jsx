import React from 'react'
import svg from '../imgs/avataaars.svg'

export default function Home() {
  return <>
    <header className='vh-100 d-flex justify-content-center align-items-center text-center'>
      <div className='text-white'>
        <img src={svg} alt="" className='w-75' />
        <h1 className='fw-bold my-3'>Start Framework</h1>
        <div className="icon my-2">
        <i class="fa-solid fa-star fa-xl"></i>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>

    </header>
  </>
}
