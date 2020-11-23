import React, {useState} from "react";
import ContactUsIMG from "../images/Contact-Us-Page/amnet-contact-us.webp";
import emailjs from "emailjs-com";
import OurLocationData from "../Data/ContactUs-Data/OurLocationData";

function TestContactUs (){
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

    function submitDetails (e){
        e.preventDefault();
        const aplhabetPattern = /^[a-z]+$/i;
        const emailpattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        

        if (aplhabetPattern.test(userDetails.fName) && aplhabetPattern.test(userDetails.lName) && emailpattern.test(userDetails.email))
        {
          alert("Your message has been recevied. We'll get in touch with you shortly!");
          return (
            emailjs.sendForm("gmail","template_opai50d", e.target,"user_gk2s5L3y9LhSSq66o6aWz")
            .then( setUserDetails({
                fName : "",
                lName : "",
                email : "",
                message : ""
            }), (error) => {
              console.log(error.text);
            }))
          
        }
        else{
          alert("You have entered an invalid email or name, Please use only alphabets for name and enter valid email!")
          return (false);
        };
    }

    // setUserDetails({
    //     fName : "",
    //     lName : "",
    //     email : "",
    //     message : ""
    // }));

    return (
    <>
        <div className="contact-us-intro container-fluid">

        </div>
            {/* <!-- CONTACT US PAGE CONTACT FORM --> */}


            <div className="new-contact-us-page new-all-margin" style={{marginTop:"80px", marginBottom:"100px"}}>
                <div className="row no-gutters" style={{height:"520px"}}>
                    <div className="col-lg-6">
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
                            
                            <input 
                            type="text" 
                            name="fName" 
                            className="form-control form-control-lg username" 
                            // onKeyPress={isNumericKey}
                            onChange = {handleChange} 
                            value = {userDetails.fName}
                            placeholder="First name*" 
                            id="first-name" required />

                            {/* <div className="showhide" style={tooltipStyle}>{/^[ ]+$/i.test(userDetails.fName)?" " : /^[a-z]+$/i.test(userDetails.fName)?" " : " "}</div> */}
                            <div style = {/^$/.test(userDetails.fName)?{display : "none"} : /^[a-z]+$/i.test(userDetails.fName) ? {display : "none"} : {display : "block",fontSize:"1rem",color:"red"}}>Use only alphabets</div>

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 lastName">
                            
                            <input 
                            type="text" 
                            name="lName" 
                            className="form-control form-control-lg username" 
                            // onKeyPress={isNumericKey}
                            onChange = {handleChange}
                            value = {userDetails.lName} 
                            placeholder="Last name*" 
                            id="last-name" required />
                            
                            <div style = {/^$/.test(userDetails.lName)?{display : "none"} : /^[a-z]+$/i.test(userDetails.lName) ? {display : "none"} : {display : "block",fontSize:"1rem",color:"red"}}>Use only alphabets</div>
                        </div>
                    </div>

                    {/* <!-- EMAIL --> */}

                    <div className="form-group">
                      
                      <input 
                      type="email" 
                      name="email" 
                      className="form-control form-control-lg userEmail" 
                      id="email-input" 
                      onChange = {handleChange}
                      value = {userDetails.email}
                      aria-describedby="emailHelp" 
                      placeholder="Enter email*" required />
                     
                      <div style = {/^$/.test(userDetails.email)?{display : "none"} : /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(userDetails.email) ? {display : "none"} : {display : "block",fontSize:"1rem",color:"red"}}>Enter Valid Email</div>
                    </div>

                    {/* <!-- MESSAGE --> */}

                    <div className="form-group user-text">
                       
                        <textarea 
                            className="form-control form-control-lg userMessage" 
                            name = "message"
                            onChange = {handleChange}
                            value = {userDetails.message}
                            id="message-input" 
                            placeholder="Your Message*"
                            rows="6" required>
                        </textarea>
                        
                    </div>
                    
                   {/* <!-- SUBMIT BUTTON --> */}

                    <div className="submit-button">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                  </form>
            </div>
                    </div>
                    <div className="col-lg-6">
                        {/* <div className="form-IMG"> */}
                            <img className="img-fluid" src= {ContactUsIMG} alt="contactus"/>
                        {/* </div> */}
                    </div>
                </div>
            </div>


        {/* <!-- NEW ABOUT US PAGE LOCATION SECTION --> */}

        <div className="about-us-page-location contact-us-location" style={{backgroundColor:"#F2F2F2",backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div className="new-all-margin">
                    <div className="about-us-page-header text-center mt-5 p-5">
                        <h1 className="section-title mt-3">WE OPERATE IN</h1>
                    </div>
                    <div className="row about-us-page-location-row  ml-0 mr-0">

                        {OurLocationData.map(list => {
                            return (
                                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 new-our-location-column" key = {list.id}>
                                        <div className="card ">
                                            <div className="card-body location-details new-location-card">
                                                <img className="img-fluid" src={list.locationIcon} alt="location"/>
                                                <h2>{list.cityName}</h2>
                                                <p>{list.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default TestContactUs;