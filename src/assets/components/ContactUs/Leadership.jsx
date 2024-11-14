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
import krishnaimg from "../../images/leadership-page/krishna-img.svg";
import kkimg from "../../images/leadership-page/kk_img.svg";

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
           text:"Krishna is the Chief Executive Officer of Amnet Digital, where he orchestrates the company's strategic vision and spearheads innovations in Digital Transformation, Artificial Intelligence, and Advanced Data Analytics. Under his stewardship, Amnet Digital consistently delivers high-impact, bespoke solutions to global enterprises, driving sustained growth and operational excellence.",
           img: krishnaimg,
            icon: linkedin,
            text1:"With over two decades of extensive experience in technology and business strategy, Krishna brings a robust track record of leadership and innovation to Amnet Digital. Renowned for cultivating enduring client partnerships through tailored, high-impact strategies, he is celebrated as a 'people's leader' who fosters a collaborative and inclusive culture that propels team innovation. His prowess in building and scaling global teams has consistently translated into cohesive, cross-regional success.",
           text2:"Prior to his tenure at Amnet Digital, Krishna held pivotal roles at Profit.co, ValueLabs, Citi Group, and WebMD. He was instrumental in shaping business strategy, driving sales and marketing initiatives, managing key accounts and client relationships, and scaling businesses. Responsible for growth, revenue, and P&L across global operations, he excelled in building global teams and establishing technology centers worldwide.",
           text3:"He holds an Advanced Management Program in Business Analytics from The Wharton School and an MBA from IBAM, New Delhi. His academic prowess not only grounds his work but also propels Amnet Digital to redefine industry standards and reach new pinnacles of success.",
        },
        // {
        //     name: "Valli Suryadevara",
        //     position: "Sr Director - Engineering",
        //     text: "Valli Suryadevara oversees engineering and brings extensive experience to our tech division.",
        //     img: sampleman,
        //     icon: linkedin,
        // },
        {
            name: "Krishnkanth Narupusetty",
            position: "Director - Data Science",
            text:"Krishnakanth Narapusetty is the Director of AI & Advanced Analytics at Amnet, responsible for spearheading initiatives in AI, ML, Data Analytics, and Data Engineering.",
            text1:"With over 24 years of experience in IT, he is a technical enthusiast with deep expertise in core AI domains, including Computer Vision, Optical Character Recognition (OCR), Large Language Models (LLMs), Natural Language Processing (NLP), Predictive and Prescriptive Analytics, Deep Learning, and Reinforcement Learning. Passionate about staying at the forefront of innovation, he continually explores the latest advancements in AI, cloud computing, edge computing, and IoT, integrating these technologies to drive transformative outcomes across industries such as Healthcare, Finance, Real Estate, Supply Chain, and Manufacturing. His commitment to leveraging cutting-edge technology, combined with a hands-on approach to emerging tools and frameworks, enables him to develop solutions that enhance automation, optimize decision-making, and elevate operational efficiency",
            text2:"Prior to Amnet, he held leadership roles at TPVision, Philips, and NXP Semiconductors, where he directed AI-powered projects, including smart TV personalization, IoT solutions for smart devices & start homes, and embedded AI applications for automotive and industrial sectors.",
            text3:"He holds an Advanced Management Program in Business Analytics from ISB, Hyderabad, and a Bachelor’s degree from BITS, Pilani. His blend of technical expertise and industry experience equips him to lead high-impact AI initiatives, driving innovation and operational excellence across multiple domains.",
            img: kkimg,
            icon: linkedin,
        },
        // {
        //     name: "Varaprasad Tupalli",
        //     position: "Director - Human Resources",
        //     text: "Varaprasad Tupalli heads Human Resources, fostering a culture of growth and inclusion.",
        //     img: sampleman,
        //     icon: linkedin,
        // },
        // {
        //     name: "Junaid",
        //     position: "Director - Human Resources",
        //     text: "Junaid heads Human Resources, fostering a culture of growth and inclusion.",
        //     img: sampleman,
        //     icon: linkedin,
        // },
        // {
        //     name: "Rakesh allapuram",
        //     position: "Director - Human Resources",
        //     text: "Rakesh allapuram heads Human Resources, fostering a culture of growth and inclusion.",
        //     img: sampleman,
        //     icon: linkedin,
        // },

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
                                <img src={member.img} alt={member.name} className="img-leadership" />
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
                    <Modal.Body className="p-5 scrollable-modal-body"
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
                            <div className={`image-green-${currentIndex + 1} image-sample-one`}>
                                <p className="text-black fw-bold-500 fs-18 text-center lh-26 my-4">
                                    <img alt="profile" src={teamMembers[currentIndex].img} className="img-leadership-one" loading="lazy" />
                                </p>
                                </div>
                                <p className="text-fonts">{teamMembers[currentIndex].name}</p>
                                <p className="small-font-popup">{teamMembers[currentIndex].position}</p>
                                <img alt="profile" src={teamMembers[currentIndex].icon} className="linkedin-img pt-3" loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <p className="text-black fw-bold-500 fs-14 text-left mt-4">{teamMembers[currentIndex].text}</p>
                                <p className="text-black fw-bold-500 fs-14 text-left mt-4">{teamMembers[currentIndex].text1}</p>
                                <p className="text-black fw-bold-500 fs-14 text-left mt-4">{teamMembers[currentIndex].text2}</p>
                                <p className="text-black fw-bold-500 fs-14 text-left mt-4">{teamMembers[currentIndex].text3}</p>
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
