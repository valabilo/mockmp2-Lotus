import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { Container, Breadcrumb, BreadcrumbItem , Row , Col , Form ,FormFloating, FormControl,FormLabel, FormCheck, Button, Image} from "react-bootstrap";

const Register = () => {

const emailLogIn = "admin@gmail.com";
const passwordLogIn = "root";
const navigate = useNavigate();

const [logInEmail, setLogInEmail] = useState('');
const [logInPassword, setLogInPassword] = useState('');


{/* Registration useState */}
const [FirstName, setFirstName] = useState('');
const [LastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [VerifiedPass, setVerifiedPass] = useState('');
const validateInputField = (e) => {
    if (VerifiedPass === "" || pass === "" || email === "" || LastName === "" || FirstName === ""){
        e.preventDefault();
        return false;
    } else {
        {/* Edit Here Add an function to store data user input to json file */}
    }
  };
{/*/////////////////////////////////////////*/}


const validateLogIn = (e) => {
    if(logInEmail === emailLogIn && logInPassword === passwordLogIn)
    {
      navigate("/profile");
      alert("successful log in");
    }else{
      document.getElementById("invalidLogIn").style.display = "block";
      e.preventDefault();
    }
}

    return (
                 <>
    
        <Container fluid id="products">
            <Breadcrumb className="mx-5">
            <BreadcrumbItem className="breadcrumb-item"><Link to="/">Home</Link></BreadcrumbItem>
            <BreadcrumbItem className="breadcrumb-item" active>Create Account</BreadcrumbItem>
            </Breadcrumb>
        </Container>
        
        <section>
            <div className="section-inner">
            <Container className="container">
                <Row className="row my-5">
                
                <Form className="col-md-5 flex-1 mb-3">
                    <Col>
                    <div className="rounded p-3">
                    <h2 className="feat-font mb-5 fw-lighter">Sign In</h2>
                    <div id="invalidLogIn" style={{display: "none", color: "red"}}>Email or Password is invalid.</div>
                    <FormFloating className="form-floating mb-3">
                    <FormControl type="email" className="rounded-3" id="floatingInput" placeholder="name@example.com" required onChange={(e)=> {setLogInEmail(e.target.value)}}/> 
                    <FormLabel htmlFor="floatingInput">Email address</FormLabel>
                    </FormFloating>
                    <FormFloating className="form-floating mb-3">
                        <FormControl type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" required onChange={(e)=> {setLogInPassword(e.target.value)}}/>
                        <FormLabel htmlFor="floatingPassword">Password</FormLabel>
                    </FormFloating>
                    <FormCheck type="checkbox" defaultValue="lsRememberMe" id="rememberMe" /> <FormLabel htmlFor="rememberMe">Remember me</FormLabel>
                    <Button variant="warning" className="w-100 my-1 btn btn-lg rounded-3" type="submit" onClick={validateLogIn}>Sign in</Button>
                    <div className="mb-3">
                        <small className="text-muted">By clicking Sign in, you agree to the terms of use.</small></div>
                    <Link className="text-center text-dark text-decoration-none mt-2" to="/register"><h5><span className="text-muted">Not a member?</span> Register</h5></Link>
                    <h6 className="my-4 text-center">or sign up with</h6>
                    <div className="d-flex gap-4 justify-content-center">
                        <Link href="#">
                        <Image width={40} className="p-0" src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png" alt />
                        </Link>
                        <Link href="#">
                        <Image width={40} className="p-0" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png" alt />
                        </Link>
                        <Link href="#">
                        <Image width={40} className="p-0" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt />
                        </Link>
                    </div>
                    </div>
                    </Col>
                </Form>
                
                <Form className="col-md-7 p-4 shadow rounded" autoSave="off" autoComplete="off" onSubmit={validateInputField} required>
                    <h2 className="feat-font mb-5 text-wrap">Create Account</h2>
                    <FormFloating className="form-floating mb-3">
                    <FormControl type="text" className="rounded-3" controlId="validationCustom01" id="floatingInput firstNameCreateAcc" placeholder="name@example.com" onChange={(e)=>{
                        setFirstName(e.target.value);
                        const pattern= "^[A-Za-z]{3,20}$";
                        if ( e.target.value.match(pattern) ){
                            document.getElementById("valid-feedback1").style.display = "block";
                            document.getElementById("invalid-feedback1").style.display = "none";
                        } else {
                            document.getElementById("valid-feedback1").style.display = "none";
                            document.getElementById("invalid-feedback1").style.display = "block";
                        }
                        }}/>

                    <FormLabel htmlFor="floatingInput">First Name</FormLabel>
                    <div id="valid-feedback1" style={{display: "none", color: "green"}}>Looks good!</div>
                    <div id="invalid-feedback1" style={{display: "none", color: "red"}}>Please Enter Your FirstName.</div>
                    </FormFloating>
                    <FormFloating className="form-floating mb-3">
                    <FormControl type="text" className="rounded-3" id="floatingPassword" placeholder="Password" controlId="validationCustom02" onChange={(e)=>{
                        setLastName(e.target.value);
                        const pattern= "^[A-Za-z]{3,20}$";
                        if ( e.target.value.match(pattern) ){
                            document.getElementById("valid-feedback2").style.display = "block";
                            document.getElementById("invalid-feedback2").style.display = "none";
                        } else {
                            document.getElementById("valid-feedback2").style.display = "none";
                            document.getElementById("invalid-feedback2").style.display = "block";
                        }
                        }}/>
                    <FormLabel htmlFor="floatingPassword">Last Name</FormLabel>
                    <div id="valid-feedback2" style={{display: "none", color: "green"}}>Looks good!</div>
                    <div id="invalid-feedback2" style={{display: "none", color: "red"}}>Please Enter Your LastName.</div>
                    </FormFloating>
                    <FormFloating className="form-floating mb-3">
                    <FormControl type="text" className="rounded-3" id="floatingPassword" placeholder="Password" controlId="validationCustom03" onChange={(e)=>{
                        setEmail(e.target.value);
                        const pattern = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm);
                        if ( e.target.value.match(pattern) && pattern.test(e.target.value)){
                            document.getElementById("valid-feedback3").style.display = "block";
                            document.getElementById("invalid-feedback3").style.display = "none";
                        } else {
                            document.getElementById("valid-feedback3").style.display = "none";
                            document.getElementById("invalid-feedback3").style.display = "block";
                        }
                        }}/>
                    <FormLabel htmlFor="floatingPassword">Email Address</FormLabel>
                    <div id="valid-feedback3" style={{display: "none", color: "green"}}>Looks good!</div>
                    <div id="invalid-feedback3" style={{display: "none", color: "red"}}>Please Enter A Valid Email Address Should Correct Format.</div>
                    </FormFloating>
                    <FormFloating className="form-floating mb-3">
                    <FormControl type="password" className="rounded-3" id="floatingPassword" placeholder="Password" controlId="validationCustom04" onChange={(e)=>{
                        setPass(e.target.value);
                        const pattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/);
                        if ( e.target.value.match(pattern) && pattern.test(e.target.value)){
                            document.getElementById("valid-feedback4").style.display = "block";
                            document.getElementById("invalid-feedback4").style.display = "none";
                        } else {
                            document.getElementById("valid-feedback4").style.display = "none";
                            document.getElementById("invalid-feedback4").style.display = "block";
                        }
                        }}/>
                    <FormLabel htmlFor="floatingPassword">Password</FormLabel>
                    <div id="valid-feedback4" style={{display: "none", color: "green"}}>Looks good!</div>
                    <div id="invalid-feedback4" style={{display: "none", color: "red"}}>Password Must have 6 characters above and Contain Atleast 1 Number, 1 Lowercase, 1 uppercase and 1 special charaters</div>
                    </FormFloating>
                    <FormFloating className="form-floating mb-3">
                    <FormControl type="password" className="rounded-3" id="floatingPassword" placeholder="Password" onChange={(e)=>{
                        setVerifiedPass(e.target.value);
                        if (pass === e.target.value){
                            document.getElementById("valid-feedback5").style.display = "block";
                            document.getElementById("invalid-feedback5").style.display = "none";
                        } else {
                            document.getElementById("valid-feedback5").style.display = "none";
                            document.getElementById("invalid-feedback5").style.display = "block";
                        }
                        }}/>
                    <FormLabel htmlFor="floatingPassword">Confirm Password</FormLabel>
                    <div id="valid-feedback5" style={{display: "none", color: "green"}}>Looks good!</div>
                    <div id="invalid-feedback5" style={{display: "none", color: "red"}}>Password Not Matched!!</div>
                    </FormFloating>
                    <h6>Keep Up To Date</h6>
                    <FormCheck type="checkbox" defaultValue="lsRememberMe" id="rememberMe" /> <FormLabel htmlFor="rememberMe">Subscribe to receive exclusive promotions, news, and the latest product information.</FormLabel>
                    <div className="mb-3">
                    <small>By signing up you agree to receive emails from LOTUS® with news, special offers, promotions and other information. You can unsubscribe at any time. </small></div>
                    <Button className="my-1 btn rounded-3 btn-warning" type="submit">Complete Registration</Button>
                </Form>
                </Row>
            </Container>
            </div>
        </section>
         </>
    );
}

export default Register;
