import React from 'react'

const Pricing = () => {
  return (
    <div className='conatiner'>
      <div className='row'>
        <div className='col-12 col-md-4'>
          <h1 className='mb-3 fs-2 p-5'>Unbeatable pricing</h1>
          <p className='p-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a className='p-5' href='' style={{ textDecoration: "none" }}>See Pricing<i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='col-md-2 d-none d-md-block'></div>
        <div className='col-12 col-md-6 mb-5'>
          <div className='row text-center'>
            <div className='col p-3 border'>
              <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
              <p>Free equity delivery
                and <br />direct mutual funds</p>
            </div>
            <div className='col  p-2 border'>
              <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
              <p>Intraday and
                F&O</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pricing
