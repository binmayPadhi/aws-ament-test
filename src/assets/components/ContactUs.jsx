import React, {useState} from "react";
import ContactUsIMG from "../images/Contact-Us-Page/amnet-contact-us.jpg";
import OurLocation from "./OurLocation";

function ContactUs (){
    const tooltipStyle = {
        color : "black",
        textDecoration : "none",
        fontSize : "1rem",
        fontFamily: `'Poppins', sans-serif`,
        padding: "5px"
    }

    const [userDetails, setUserDetails] = useState({
        fName : "",
        lName : "",
        email : "",
        message : ""
    });


    function handleChange (event){
        const {value, name} = event.target;
        setUserDetails(prevValue => {
            return (
                {
                    ...prevValue,
                    [name] : value
                }
            )
        })
    }

    function submitDetails (event){
        event.preventDefault();
        const aplhabetPattern = /^[a-z]+$/i;
        const emailpattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (aplhabetPattern.test(userDetails.fName) && aplhabetPattern.test(userDetails.lName) && emailpattern.test(userDetails.email))
        {
          alert("Your message has been recevied. We'll get in touch with you shortly!");
          return (setUserDetails({
            fName : "",
            lName : "",
            email : "",
            message : ""
        }));
          
        }
        else{
          alert("You have entered an invalid email or name, Please use only alphabets for name and enter valid email!")
          return (false);
        };
    }

    return (
    <>
        <div className="contact-us-intro container-fluid">

        </div>
            {/* <!-- CONTACT US PAGE CONTACT FORM --> */}
        <div className="contact-us-page all-margin">

            <div className="form-IMG">
                <img className="img-fluid" src= {ContactUsIMG} alt="contactus"/>
            </div>
            <div className="contact-form-user-details">
                <div className="contact-form-header">
                    <h1>We're Listening!</h1>
                    <p>While we specialize in AI, there are simpler ways for us to get in touch & answer your questions!</p>
                </div>
                

                {/* <!-- FORM --> */}

                <form name="contactForm" action="#" method="post" onSubmit = {submitDetails}>

                  {/* <!-- USERNAME --> */}
                    <div className="row user-name">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <label>First Name*
                            <input 
                            type="text" 
                            name="fName" 
                            className="form-control form-control-lg username" 
                            // onKeyPress={isNumericKey}
                            onChange = {handleChange} 
                            value = {userDetails.fName}
                            placeholder="First name" 
                            id="first-name" required /></label>

                            {/* <div className="showhide" style={tooltipStyle}>{/^[ ]+$/i.test(userDetails.fName)?" " : /^[a-z]+$/i.test(userDetails.fName)?" " : " "}</div> */}
                            <div style = {/^$/.test(userDetails.fName)?{display : "none"} : /^[a-z]+$/i.test(userDetails.fName) ? {display : "none"} : {display : "block",fontSize:"1rem",color:"red"}}>Use only alphabets</div>

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 lastName">
                            <label>Last Name*
                            <input 
                            type="text" 
                            name="lName" 
                            className="form-control form-control-lg username" 
                            // onKeyPress={isNumericKey}
                            onChange = {handleChange}
                            value = {userDetails.lName} 
                            placeholder="Last name" 
                            id="last-name" required />
                            </label>
                            <div style = {/^$/.test(userDetails.lName)?{display : "none"} : /^[a-z]+$/i.test(userDetails.lName) ? {display : "none"} : {display : "block",fontSize:"1rem",color:"red"}}>Use only alphabets</div>
                        </div>
                    </div>

                    {/* <!-- EMAIL --> */}

                    <div className="form-group">
                      <label>Email*
                      <input 
                      type="email" 
                      name="email" 
                      className="form-control form-control-lg userEmail" 
                      id="email-input" 
                      onChange = {handleChange}
                      value = {userDetails.email}
                      aria-describedby="emailHelp" 
                      placeholder="Enter email" required />
                      </label>
                      <div style = {/^$/.test(userDetails.email)?{display : "none"} : /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(userDetails.email) ? {display : "none"} : {display : "block",fontSize:"1rem",color:"red"}}>Enter Valid Email</div>
                    </div>

                    {/* <!-- MESSAGE --> */}

                    <div className="form-group">
                        <label>Your Message*
                        <textarea 
                            className="form-control form-control-lg userMessage" 
                            name = "message"
                            onChange = {handleChange}
                            value = {userDetails.message}
                            id="message-input" 
                            rows="6" required>
                        </textarea>
                        </label>
                    </div>
                    
                   {/* <!-- SUBMIT BUTTON --> */}

                    <div className="submit-button">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                  </form>
            </div>
        </div>

        {/* OUR LOCATION SECTION */}
        <OurLocation />
        </>
    )
}

export default ContactUs;