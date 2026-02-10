import React from 'react'

const Universe = () => {
  return (
    <div className="container mt-5">
      {/* Heading section */}
      <div className="text-center mb-4">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Logo grid */}
      <div className="row text-center">
        <div className="col-4 p-3 mt-5">
          <img src="/images/smallcaseLogo.png" alt="Smallcase" style={{ width: "150px" }} />
          <p className='text-small text-muted mt-4' >Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/streakLogo.png" alt="Sensibull" style={{ width: "150px" }} />
           <p className='text-small text-muted mt-3' > Algo & startegy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/sensibullLogo.svg" alt="Tijori" style={{ width: "150px" }} />
          <p className='text-small text-muted mt-3' > option trading plateform</p>
        </div>
        <div className="col-4 p-3 mt-5 mt-5">
          <img src="/images/zerodhaFundhouse.png" alt="Smallcase" style={{ width: "150px" }} />
          <p className='text-small text-muted mt-4' >Asset managment</p>
        </div>
        <div className="col-4 p-3 mt-5 mt-5">
          <img src="/images/goldenpiLogo.png" alt="Sensibull" style={{ width: "150px" }} />
           <p className='text-small text-muted mt-3' >Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5 mt-5">
          <img src="/images/dittoLogo.png" alt="Tijori" style={{ width: "150px" }} />
           <p className='text-small text-muted mt-3' >Insurance</p>
        
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup  Now</button>
      
      </div>
    </div>
  )
}

export default Universe

