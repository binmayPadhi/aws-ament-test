import React from "react";
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import sampleman from '../../images/leadership-page/smiling-man-sam.png';
import Modal from "react-bootstrap/Modal";
import '../../CSS/Opportunities.css';
import linkedin from "../../images/leadership-page/linkedinimg.png";
import circularlines from "../../images/leadership-page/circular-lines.svg";
import arrowforward from "../../images/leadership-page/arrow_forward.svg";
import arrowbackward from "../../images/leadership-page/arrow_backward.svg";
import close from "../../images/leadership-page/close.svg";

const Leadership = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentMember, setCurrentMember] = useState(null);
    const [focusInput, setFocusinput] = useState(false);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const [show, setShow] = useState(false);
    const arrowStyle = {
        position: 'absolute',
        top: '0px',
        right: '76px',
        fontSize: '15px',
        cursor: 'pointer',
        userSelect: 'none',
    };

    const teamMembers = [
        {
            name: "Krishna Reddy",
            position: "Chief Executive Officer",
           text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. My text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. My text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type type type specimen book.",
            img: sampleman,
            icon: linkedin,
            text1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            name: "Valli Suryadevara",
            position: "Sr Director - Engineering",
            text: "Valli Suryadevara oversees engineering and brings extensive experience to our tech division.",
            img: sampleman,
            icon: linkedin,
        },
        {
            name: "Krishnkanth Narupusetty",
            position: "Director - Data Science",
            text: "Krishnkanth Narupusetty is our Data Science Director, pushing forward with data-driven strategies.",
            img: sampleman,
            icon: linkedin,
        },
        {
            name: "Varaprasad Tupalli",
            position: "Director - Human Resources",
            text: "Varaprasad Tupalli heads Human Resources, fostering a culture of growth and inclusion.",
            img: sampleman,
            icon: linkedin,
        },
        {
            name: "Junaid",
            position: "Director - Human Resources",
            text: "Junaid heads Human Resources, fostering a culture of growth and inclusion.",
            img: sampleman,
            icon: linkedin,
        },
        {
            name: "Rakesh allapuram",
            position: "Director - Human Resources",
            text: "Rakesh allapuram heads Human Resources, fostering a culture of growth and inclusion.",
            img: sampleman,
            icon: linkedin,
        },

    ];

    const handleShow = (index) => {
        setCurrentIndex(index); // Set the current index based on clicked team member
        setShow(true);
    };

    const handleClose = () => setShow(false);

    // Function to go to the next team member
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    };

    // Function to go to the previous team member
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Reshaping the Retail Industry through Advanced Analytics and AI</title>
                <meta name="description" content="The Retail industry is experiencing unprecedented change driven by consumer needs and demands 
             enabled by technology. Watch the on-demand webinar now!" />
                <meta name="keywords" content="AI for retail webinar, advanced analytics for retail business" />
            </Helmet>
            {/* <Headercontent componentfrom={componentName} /> */}
            <div className="center-90">
                <div
                    className=" row mt-5" >
                    <div className="col-sm-12 col-xs-12 col-md-8 col-lg-6 mt-4">
                        <h1 className="mt-5-rem leader-title ">The leadership team</h1>
                        <p className="fs-16 text-justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-4 mt-5-rem-circle">
                        <img src={circularlines} className="cirlce-img"/>
                    </div>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div className="col-lg-4 mt-5" key={index}>
                            <div className={`image-green-${index + 1} image-sample`}>
                                <img src={member.img} alt={member.name} style={{ width: "100%", height: "auto" }} />
                            </div>
                            <div>
                            <h1 className="text-fonts-title text-underline-title" onClick={() => handleShow(index)} style={{ cursor: 'pointer' }}>
                                {member.name}
                            </h1>
                            <h1 className="small-font">{member.position}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal show={show} onHide={handleClose} centered >
                {teamMembers[currentIndex] && (
                    <Modal.Body className="p-5"
                    >
                        {/* Left Arrow */}
                        <div style={{ position: 'absolute', top: '15px', right: '10px', display: 'flex', alignItems: 'center' }}>
                            <span
                                style={arrowStyle}
                                onClick={handlePrevious}
                            >
                                <img src={arrowforward}  className="icon-arrows"/>
                            </span>
                            <span
                                style={{ ...arrowStyle, right: '48px', left: 'auto' }}
                                onClick={handleNext}
                            >
                              <img src={arrowbackward} className="icon-arrows"/>
                            </span>
                            <span
                                style={{ cursor: 'pointer',  marginTop: '2px', paddingRight: '16px'}}
                                onClick={handleClose}
                            >
                                <img src={close} className="icon-arrows"/>
                            </span>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            <div className={`image-green-${currentIndex + 1} image-sample`}>
                                <p className="text-black fw-bold-500 fs-18 text-center lh-26 my-3">
                                    <img alt="profile" src={teamMembers[currentIndex].img} className="img-35" loading="lazy" />
                                </p>
                                </div>
                                <p className="text-fonts">{teamMembers[currentIndex].name}</p>
                                <p className="small-font-popup">{teamMembers[currentIndex].position}</p>
                                <img alt="profile" src={teamMembers[currentIndex].icon} className="linkedin-img pt-3" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <p className="text-black fw-bold-500 fs-14 text-left mt-4">{teamMembers[currentIndex].text}</p>
                                <p className="text-black fw-bold-500 fs-14 text-left mt-4">{teamMembers[currentIndex].text1}</p>
                            </div>
                           
                        </div>
                        <hr className="hr-grey-line" />
                        <p className="footer-text mt-4">“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”</p>
                    </Modal.Body>
                )}
            </Modal>

        </>
    );
};

export default Leadership;
