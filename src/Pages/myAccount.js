import { Link } from "react-router-dom";

const MyAccount = () => {
    return (
        <div>
             <div>
  {/*-----Breadcrumbs------*/}
  <div className="container-fluid" id="products">
    <ol className="breadcrumb mx-5">
      <li className="breadcrumb-item"><Link href="index.html">Home</Link></li>
      <li className="breadcrumb-item"><Link href="Create-Account.html">Sign In</Link></li>
      <li className="breadcrumb-item" active>My Account</li>
    </ol>
  </div>
  {/*-----MyAccount Content------*/}
  <section className="container-fluid pt-3">
    <div className="mx-auto">
      <h1 className="feat-font w-50 mx-auto mb-0 px-3">My Account</h1>
    </div>
    {/*---list----*/}
    <div className="container mt-0">
      <div className="row">
        <div className="col-md-3 pt-5 ps-5" id="myDiv">
          <p className="active">My Account</p>
          <hr className="me-3" /> 
          <p><Link href="toolRegistration.html">My Tools</Link></p>
          <hr className="me-3" /> 
          <p><Link href="wishList.html">Wish List</Link></p>
          <hr className="me-3" /> 
        </div>
        {/*-----Content*/}
        <div className="col-md-9">
          <div className="container-fluid my-2">
            <p className="text-muted">Review and update your account details.</p>
            <h5 className="mt-5">MyLOTUS Points: <span className="text-warning fw-bold">23</span><hr className="w-25" /></h5>
            <p className="fw-bolder">Purchase and Register your Tools to earn MyLOTUS Points</p>
            <small>1 point = 50Php</small>
            <hr />
            <h5 className="my-3">Account Details</h5>
            <p>Email Address: <span className="fw-bolder" id="EmailAddress"></span></p>
            <p>Password: <span className="fw-bolder">**********</span></p>
            <Link href="#" className="btn text-light btn-secondary">Change Password</Link>
            <hr />
            <div className="me-5">
              <input type="checkbox" defaultValue="lsRememberMe" id="rememberMe" /> 
              <label htmlFor="rememberMe">Sign up to receive the latest info on new LOTUS products, special offers and more.</label>
              <br />
              <small className="text-muted">By signing up you agree to receive emails from LOTUS with news, special offers, promotions and other information. You can unsubscribe at any time.</small>
              <br />
              <Link href="#" className=" my-3 btn text-light btn-secondary">SUBSCRIBE</Link>
            </div>
            <div className="me-5 mt-3">
              <div className="accordion w-75" id="myAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button type="button" className="fw-bold accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">UPDATE INFORMATION</button>									
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div className="card-body">
                      <form className="mx-5">
                        <label htmlFor="floatingInput">First Name</label>
                        <input type="text" className="w-75 ms-2 mb-3 form-control rounded-3" id="floatingInput" />
                        <label htmlFor="floatingInput">Last Name</label>
                        <input type="email" className="w-75 ms-2 mb-3 form-control rounded-3" id="floatingInput" />
                        <label htmlFor="floatingInput">Address</label>
                        <input type="email" className="w-75 ms-2 mb-3 textarea form-control rounded-3" id="floatingInput" />
                        <label htmlFor="floatingInput">Phone Number</label>
                        <input type="text" className="w-75 ms-2 mb-3 form-control rounded-3" id="floatingInput" />
                        <label htmlFor="floatingInput">Birth Date</label>
                        <input type="date" className="w-75 ms-2 mb-3 form-control rounded-3" id="floatingInput" />
                        <button className="w-50 ms-2 my-1 btn rounded-3 btn-warning" type="submit">UPDATE</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        </div>
    );
}

export default MyAccount;
