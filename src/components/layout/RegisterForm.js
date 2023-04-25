import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAlt } from "@fortawesome/free-solid-svg-icons";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';

import { Scale } from "@mui/icons-material";
import shadows from "@mui/material/styles/shadows";
import { fontGrid } from "@mui/material/styles/cssUtils";

function App() {



  const handleback = () => {
    navigate("/")
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setNgoName] = useState("");
  const [NgoID, setNgoID] = useState("");
  const [profileImage, setNgoProfileImage] = useState("");



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNgoNameChange = (e) => {
    setNgoName(e.target.value);
  };

  const handleNgoIDChange = (e) => {
    setNgoID(e.target.value);
  };
  const handleProfileImageChange = (e) => {
    setNgoProfileImage(e.target.value);
  };

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your register logic

    axios.post("http://localhost:5000/user/signup", {
      email: email,
      password: password,
      name: name,
      NgoID: NgoID,
      profileImage: profileImage
    })
    .then((response) => {
      console.log(response)
      alert(response.data.message)

      if(response.data.message==="Verification email sent")
      navigate("/login")
  })
  .catch((error) => {
    console.log(error);
  });

    setEmail("");
    setPassword("");
    setNgoName("");
    setNgoID("");
    setNgoProfileImage("");
  };
  return (
    <div >



      <div className='d-flex flex-row ps-5 pt-5' >
        <div style={{ fontSize: "35px", paddingRight: "10px" }}>
          <FontAwesomeIcon icon={faHandshakeAlt} className="navbar-brand-2" style={{ color: '#FF8000' }} > </FontAwesomeIcon>
        </div>
        {/* <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/> */}
        <span className="h1 fw-bold mb-0">Helping Hands</span>
      </div>




      <MDBContainer lg  >
        <div className="container2">
          <MDBRow>

            <MDBCol sm='6'>
              <MDBIcon onClick={handleback} icon='arrow-circle-left' style={{ fontSize: "35px", marginLeft: "2rem", marginTop: "5.2rem", display: "block", position: "absolute" }} />

              {/* <button class="back-button" onclick={handleback}>Back</button> */}

              <div style={{ paddingTop: '35px', paddingLeft: '50px', fontSize: '18px' }}>


                <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4' >
                  <div className="form-column">
                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', fontSize: '35px' }} >Register NGO</h3>

                    <MDBInput wrapperClass='mb-4' label='Ngo name' value={name} onChange={handleNgoNameChange} id='form1' type='text' required />
                    <MDBInput wrapperClass='mb-4' value={NgoID} onChange={handleNgoIDChange} label='Ngo Id' id='form2' type='text' required />
                    <MDBInput wrapperClass='mb-4' value={profileImage} onChange={handleProfileImageChange} label='Profile Image Link' id='form3' type='text' />
                    <MDBInput wrapperClass='mb-4' value={email} onChange={handleEmailChange} label='Email' id='form4' type='email' required />
                    <MDBInput wrapperClass='mb-4' value={password} onChange={handlePasswordChange} label='Password' id='form5' type='password' required />

                    <MDBBtn className='w-100 mb-4' color='info' size='md' onClick={handleSubmit}>sign up</MDBBtn>

                    <p className='ms-5'>Already have an account? <a href="#!" class="link-info"><Link to="/login">Login</Link></a></p>

                  </div>
                </div>
              </div>
            </MDBCol>

            <div className="image-column">
              <MDBCol sm='6' className='d-none d-sm-block px-0'>
                <img src="https://img.freepik.com/free-vector/expert-checking-business-leader-order_74855-10624.jpg?size=626&ext=jpg&ga=GA1.2.1697258466.1677494383&semt=sph" alt="Register image" className="w-125"
                  style={{ alignContent: 'flex-end', height: '31rem', width: '30rem' }} />
              </MDBCol>
            </div>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>

  );
}

export default App;