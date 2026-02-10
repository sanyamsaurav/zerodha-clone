import React from 'react'

const RightSection = ({ imageURL, productName, productDescription, learnMore }) => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        {/* Text on left */}
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
        <div>
            <a href={learnMore}>
              Learn More →
            </a>
            </div>
          
        </div>

        {/* Image on right */}
        <div className="col-6">
          <img src={imageURL} alt={productName} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  )
}

export default RightSection
