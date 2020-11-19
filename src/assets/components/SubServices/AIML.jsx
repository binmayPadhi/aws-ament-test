import React from "react";
import DataLabeling from "../../Data/SubService-Data/DataLabeling";
import SubServicesData from "../../Data/SubService-Data/SubServicesData";
import SubServiceCareer from "../SubServices/SubServiceCareer";
import {Link} from "react-scroll";

// import styled from "styled-components";

function AIML ({match}){

    // const dataLabelingStyle = {
    //     backgroundImage:`url(${DataLabelingBG})`,
    //     backgroundAttachment: "scroll",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover"
    // }


    // background-image: url(${img});
//     const Content = styled.div`
//   padding: 10px;
//   background-image: url(${DataLabelingBG});
//   backgroundAttachment: scroll;
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   color: red;

//   @media (max-width: 768px) {
//     background-image: none;
//   }
// `;

// const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//                     const imageUrl = windowWidth >= 650 ? serviceDetail.BG : serviceDetail.bg;
//                     useEffect(() => {
//                         const handleWindowResize = () => {
//                             setWindowWidth(window.innerWidth);
//                         };
                        
//                         window.addEventListener('resize', handleWindowResize);
                
//                         return () => {
//                             window.removeEventListener('resize', handleWindowResize);
//                         }
//                     }, []);

    return (
        <>
                {SubServicesData.filter(data => data.id === match.params.id).map(serviceDetail => {
                    return (
                        <>
                         <div className="sub-service-intro container-fluid" key={serviceDetail.id} style={{backgroundImage:`url(${serviceDetail.BG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row service-all-margin">
                        <div className="col-lg-5 subService-AIML-intro-caption all-margin">
                            <h2>
                                {serviceDetail.title}
                            </h2>
                            <p>
                                {serviceDetail.description}
                            </p>

                            <div className="subService-AIML-intro-btn">
                                {/* <a href="/casestudies">
                                    <button type="button" className="btn btn-default">View Details</button>
                                </a> */}
                            <Link
                            activeClass="active"
                            to="details"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            <button type="button" className="btn btn-default sub-service-view-details-btn">View Details</button>
                        </Link>
                            </div>
                        </div>
                        </div>
                        </div>
                    </>
                )
            })}
            
            {/* </div>
            </div> */}

            {/* <Content>Hey</Content> */}



            <div className="sub-service-data-section" id="details">
                {DataLabeling.filter(data => data.name === match.params.id).map((dataDetail, index) => {
                    return (
                        !(dataDetail.float === "left") ?
                                    // <> {(index === 2) ? <div>
                                    //     <h1>hey there</h1>
                                    // </div> : <h2 className="text-center">bye</h2>}
                                    <>
                                    <div className="dummy" id={dataDetail.id}>

                                    </div>
                                        <div className="row service-all-margin" key={dataDetail.id} >
                                        <div className="col-xl-12 col-lg-12 about-us-details p-0" key = {dataDetail.id}>
                                            <div className="sub-service-image">
                                                <img className="img-fluid about-us-img-right "  src={dataDetail.imgSrc} alt={dataDetail.name} />
                                            </div>
                                            <div className="row no-gutters sub-service-img-right-desc">
                                                <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <span>
                                                        <img src= {dataDetail.icon} className="img-fluid about-icons text-center" alt = "end to end" />
                                                    </span>
                                                </div>
                                                <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <h2>
                                                        {dataDetail.title}
                                                    </h2>
                                                    <p>
                                                        {dataDetail.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                    // </>
                                     :
                                     <>
                                     <div className="dummy" id={dataDetail.id}>

                                     </div>
                                        <div className="sub-service-details-bg-color">
                                         <div className="row service-all-margin ">
                                        <div className="col-12 about-us-details p-0" key = {dataDetail.id} id={dataDetail.id}>
                                        <div className="sub-service-image">
                                            <img className="img-fluid about-us-img-left " src={dataDetail.imgSrc} alt={dataDetail.name} />
                                        </div>
                                            <div className="row no-gutters sub-service-img-right-desc">
                                                <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <span>
                                                        <img src= {dataDetail.icon} className="img-fluid about-icons text-center" alt = "end to end" />
                                                    </span>
                                                </div>
                                                <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <h2>
                                                        {dataDetail.title}
                                                    </h2>
                                                    <p>
                                                        {dataDetail.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     </div>
                                     </>
                                        )
                                    })}
                                </div>

                                {/* SUB SERVICE CAREER SECTION */}

                                {SubServicesData.filter(data => data.id === match.params.id).map(serviceDetail => {
                                    return(
                                        <SubServiceCareer careerBg={serviceDetail.subCareerBG}/>
                                    )
                                })}

                               
                            </>
                        );
                    }

export default AIML;


// <div key={dataDetail.id} className="service-all-margin" style={{marginTop:"45px"}}>
//                                         <div className="row" >
//                                                         <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 desc">
//                                                         <div className="row no-gutters sub-service-img-right-desc">
//                                                                 <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
//                                                                     <span>
//                                                                         <img src= {dataDetail.icon} className="img-fluid about-icons" alt = "end to end" />
//                                                                     </span>
//                                                                 </div>
//                                                                 <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12">
//                                                                     <h2>
//                                                                         {dataDetail.title}
//                                                                     </h2>
//                                                                     <p>
//                                                                         {dataDetail.description}
//                                                                     </p>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
//                                                             <img src={dataDetail.imgSrc} alt="image" className="img-fluid" />
//                                                         </div>
//                                                     </div>
//                                     </div>


