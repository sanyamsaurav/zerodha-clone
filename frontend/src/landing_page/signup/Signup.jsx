import React from 'react';

const Signup = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col-12 col-md-7 p-5">
          <img src="/images/signup.png" style={{ width: "100%" }} alt="signup" />
        </div>
        <div className="col-12 col-md-5 p-5">
          <h1 className="fs-2">Signup now</h1>
          <p className="text-muted">Or track your existing application.</p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">+91</span>
            <input type="text" className="form-control" placeholder="Mobile number" aria-label="Mobile number" aria-describedby="basic-addon1" />
          </div>
          <button className='btn btn-primary fs-5 mb-3' style={{ width: "100%" }}>Continue</button>
          <a href="" style={{ textDecoration: "none", fontSize: "14px" }}>Want to open an NRI account?</a>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. <br /><br />
            Please read the <a href="" style={{ textDecoration: "none" }}>Terms and conditions</a> and <a href="" style={{ textDecoration: "none" }}>Privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
