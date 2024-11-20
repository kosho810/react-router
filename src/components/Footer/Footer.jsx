import React from 'react'

export default function Footer() {
  return <>
    <footer className='py-5 text-center'>
      <div className="container  ">
        <div className="row">
          <div className="col-md-4">
            <div>
              <h3 className='text-white fw-semibold mb-3'>LOCATION</h3>
              <p className='text-white mb-2'>2211 John Daniel Drive</p>
              <p className='text-white mb-2'>Clark MO ,54544</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className='text-white fw-semibold mb-3'>Around The Web</h3>
            <div className="icons text-white d-flex justify-content-center ">
              <div className='rounded-circle border border-white border-1 m-2'>
                <i className="fa-brands fa-facebook m-2"></i>
              </div>
              <div className='rounded-circle border border-white border-1 m-2'>
                <i className="fa-brands fa-twitter m-2"></i>
              </div>
              <div className='rounded-circle border border-white border-1 m-2'>
                <i className="fa-brands fa-linkedin-in m-2"></i>
              </div>
              <div className='rounded-circle border border-white border-1 m-2'>
                <i className="fa-solid fa-globe m-2"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className='fw-semibold text-white mb-2'>ABOUT FREELANCER</h3>
            <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
     
    </footer>
    <div className='py-2 footer-feet text-white text-center'>
        <p>Copyright © Your Website 2021</p>
      </div>


  </>
}
