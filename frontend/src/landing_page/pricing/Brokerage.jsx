import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 text-center border-top'>
        <div className='col-12 col-md-8 p-4 '>
          <a href='' style={{ textDecoration: "none" }}>
            <h3 className='fs-5'>Brokerage calculator</h3></a>
          <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className='text-muted '>
            <li>call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be send via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be ₹20 per contract note.courier charges apply.</li>
            <li>For NRI account(non-PIS), 0.5% or ₹100 per executed order for equity(whichever is lower)</li>
            <li>for NRI account (PIS),0.5% or ₹200 per executed order for equity(whichever is lower)</li>


          </ul>
        </div>
        <div className='col-12 col-md-4 p-4'>
          <a href='' style={{ textDecoration: "none" }}><h3 className='fs-5'>List of charges</h3></a>
        </div>
      </div>

    </div>
  )
}

export default Brokerage
