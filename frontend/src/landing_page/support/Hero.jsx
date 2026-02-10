import React from 'react'

const Hero = () => {
  return (
    <div className='container-fluid' id="supportHero">
      <div className=' p-5 ' id="supportWrapper">
      <h4>Support Portal</h4>
      <a href=''>Track Tickets</a>
        </div>
        <div className='row p-5 mb-5 mt-5'>
          <div className='col-6 p-5'>
            <h1 className='fs-3' >Search for an answer or browse help topics to create a ticket</h1>
            <input type="text" placeholder='Eg: how do i active f&Q,why is my order getting rejected?' style={{width:"80%", height:"50px", borderRadius:"5px", paddingLeft:"20px"}}/>
            <br/>
            <a href=''>Track Account opening</a>
<br/>
            <a href=''>Track segment activation</a>

            <a href=''>Intrady margins</a>

            <a href=''>kite user manual</a>
          </div>
          <div className='col-6 p-5'>
            <h1 className='fs-3' >Featured</h1>

            <ol>
              <li> <a href=''>current Takeovers and Delisting -january 2024</a>

              </li>
              <li>
  <a href=''>Latest Intraday leverages - MIS & CO </a>
              </li>
            </ol>


          
          
          </div>

          </div>
  
    </div>
  )
}

export default Hero
