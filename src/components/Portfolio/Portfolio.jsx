import React, { useState } from 'react'
import img1 from '../imgs/poert1.png'
import img2 from '../imgs/port2.png'
import img3 from '../imgs/port3.png'


export default function Portfolio() {

  const [data, setData] = useState(
    [
      { img: img1, id: 'img1' },
      { img: img2, id: 'img2' },
      { img: img3, id: 'img3' },
      { img: img1, id: 'img4' },
      { img: img2, id: 'img5' },
      { img: img3, id: 'img6' }
    ]
  )

  return <>
    <section className="portfolio text-center py-5">
      <h2 className='fw-bold mb-3'>Portfolio Component </h2>
      <div className="icon mb-3">
        <i class="fa-solid fa-star fa-xl"></i>
      </div>

      <div className="container">
        <div className="row g-4">

          {data.map((item) => {
            return <>
              <div className="col-md-4  " key={item.id}>
                <div className="portfolio-item">
                  <img src={item.img} alt="" className='w-100 rounded-3 ' />
                  <div data-bs-toggle="modal" data-bs-target={"#" + item.id} className="plus rounded-3">
                    <i class="fa-solid fa-plus fa-2xl"></i>
                  </div>
                </div>
              </div>
            </>
          }
          )}
          {data.map((item) => {
            return <>

              <div className="modal fade" id={item.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">

                    <div className="modal-body">
                      <img src={item.img} className='w-100' alt="" />
                    </div>

                  </div>
                </div>
              </div>
            </>
          }
          )}
        </div>
      </div>
    </section>
  </>
}
