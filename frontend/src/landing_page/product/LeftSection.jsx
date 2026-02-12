import React from 'react'

const LeftSection = ({ imageURL, productName, productDescription, trydemo, learnMore, googlePlay, appStore }) => {
  return (
    <div className='containe mt-5'>
      <div className='row'>
        <div className='col-12 col-md-6 p-5'>
          <img src={imageURL} className="img-fluid" />

        </div>

        <div className='col-12 col-md-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={trydemo}>try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>Learn More</a>

          </div>
          <div className='mt-3'>

            <a href={googlePlay}><img src='/images/googlePlayBadge.svg' /></a>
            <a href={appStore}><img src='/images/appstoreBadge.svg' style={{ marginLeft: "50px" }} /></a>

          </div>

        </div>
      </div>

    </div>
  )
}

export default LeftSection
