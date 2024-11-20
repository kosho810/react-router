import React from 'react'

export default function Contact() {
  return <>
  <section className="contact py-lg-5 text-center">
    <h2 className='fw-bold text-center'>
      Contact Section
    </h2>
    <div className="icon mb-3">
        <i class="fa-solid fa-star fa-xl"></i>
      </div>

      <div className='w-50 m-auto'>
        <form action="">
          <input type="text" placeholder='User Name' className='w-100 form-control form-control-lg mb-4 '/>
          <input type="number" placeholder='User Age' className='w-100 form-control form-control-lg mb-4 '/>
          <input type="email" placeholder='User Email' className='w-100 form-control form-control-lg mb-4 '/>
          <input type="password" placeholder='password' className='w-100 form-control form-control-lg mb-4 '/>
          <button className='btn send'>Send message</button>
        </form>

      </div>
  </section>
  
  
  </>
}
