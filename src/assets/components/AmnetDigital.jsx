import { Helmet } from "react-helmet";
import homebg from "../images/swiftinisghts/group-bg.svg";
import imageone from "../images/swiftinisghts/image-one.svg";
import image1 from "../images/swiftinisghts/image2.svg";
import image2 from "../images/swiftinisghts/image3.svg";
import image3 from "../images/swiftinisghts/image4.svg";
import previous from "../images/HomePage/homepage-industry-IMG/left-arrow.png";
import next from "../images/HomePage/homepage-industry-IMG/right-arrow.png";
import AmnetDigitalData from "../Data/Privacypolicy-Data/Amnetdigitaldata";
import enrichimg from "../images/swiftinisghts/enrich-img.svg";
import Gotocontact from "./Gotocontant";
import Circle from "../images/swiftinisghts/circle.svg";
import imageyellow from "../images/swiftinisghts/img-yellow.svg";
import imagegreen from "../images/swiftinisghts/imag-green.svg";
import employegreen from "../images/swiftinisghts/employee-green.svg";
import employellow from "../images/swiftinisghts/employee-yellow.svg";

function AmnetDigital() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Life At Amnet Digital | Amnet Digital</title>
                <meta name="description" content="Discover life at Amnet Digital, where a vibrant, inclusive culture fosters creativity, collaboration, and growth, valuing every team member's contributions and innovation." />
                <meta name="keywords" content="Amnet Digital, inclusive culture, innovation, collaboration, thrive, work-life balance, AI" />
                <link rel="canonical" href="https://www.amnetdigital.com/" />
                <meta property="og:title" content="Data, Analytics & AI solutions | Amnet Digital Careers" />
                <meta property="og:description" content="Amnet Digital opens doors for  professional growth, where your skills are developed and tested in exciting ways. 
Search jobs best suited for you. Apply today!" />
                <meta property="og:url" content="https://www.amnetdigital.com/careers" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="../images/careers-page/Careerhome.png" />
            </Helmet>
            <div
                className="sub-service-intro container-fluid"
                style={{
                    backgroundImage: 'url("https://s3.amazonaws.com/swiftinsights.ai/Amnetdigital_website_assets/group-bg.svg")',
                    backgroundAttachment: "scroll",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="w-90 mx-auto">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 new-subService-AIML-intro-caption">
                            <h2 className="textAnimation" data-text="Create Your Future!">
                                Life at Amnet Digital
                            </h2>
                            <p className="pt-4 f-fm">
                                At Amnet Services, we believe that our people are our greatest asset. Our vibrant and inclusive culture is designed to foster creativity,
                                collaboration, and professional growth. Here, every team member is valued, and their contributions are recognized and celebrated. Life at Amnet Services
                                is more than just work; it’s about thriving in an environment that promotes innovation, balance, and community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-90 mx-auto mb-4">
                <div className="contain-lop d-flex flex-row justify-content-end">
                    <img src={imagegreen} className="cricle-img img1" alt="Image 1" />
                   
                </div>
                <h1 className="text-center culture-innovation space-read">A Culture of Innovation</h1>
                <p className="innovation-text">
                    Innovation is at the heart of everything we do at Amnet Services. We encourage our employees to think outside the box and bring new ideas to the table. Our open-door policy ensures that every voice is heard, and great ideas can come from anyone, at any level. With regular brainstorming sessions, hackathons, and innovation challenges, we continuously push the boundaries of what’s possible.
                </p>
                <div className="contain-lop ">
                <img src={imageyellow} className="cricle-img img2" alt="Image 2" />
                </div>
            </div>

            <div className="grey-bgk  space-read">
                <div className="w-90 mx-auto">
                <div className="contain-lop d-flex flex-row justify-content-between">
                        <img src={employegreen} className="cricle-img img1" alt="Image 1" />
                        </div>
                    <div className="row pt-5">
                        <div className="col-lg-8">
                       
                            <h1 className="culture-innovation ">Employee Recognition</h1>
                            <p className="innovation-text">We believe in recognizing and rewarding the hard work and dedication of our employees.
                                Our recognition programs, such as Employee of the Month, spotlight awards, and performance bonuses,
                                ensure that outstanding contributions are celebrated. Regular feedback and appraisal sessions help employees understand their strengths and areas for improvement, fostering a culture of continuous growth and excellence.</p>
                        </div>
                        <div className="col-lg-4 ">
                            <img className="w-100 p-2" src="https://s3.amazonaws.com/swiftinsights.ai/Amnetdigital_website_assets/image-one.svg" loading="lazy" />
                        </div>
                      
                    </div>
                    <div className="row pb-5">
                        <div className="col-lg-4">
                            <img className="w-100 p-2" src="https://s3.amazonaws.com/swiftinsights.ai/Amnetdigital_website_assets/image2.svg" loading="lazy" />
                        </div>
                        <div className="col-lg-4">
                            <img className="w-100 p-2" src="https://s3.amazonaws.com/swiftinsights.ai/Amnetdigital_website_assets/image3.svg" loading="lazy" />
                        </div>
                        <div className="col-lg-4">
                            <img className="w-100 p-2" src="https://s3.amazonaws.com/swiftinsights.ai/Amnetdigital_website_assets/image4.svg" loading="lazy" />
                        </div>
                    </div>
                    <div className="contain-lop ">
                            <img src={employellow} className="cricle-img img3" alt="Image 2" />
                        </div>
                </div>
            </div>

            <div className="bg-blue space-read">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {AmnetDigitalData.map((list, index) => {
                            return (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={list.id}>
                                    <div className="industry-section w-90 mx-auto">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img src={list.fullimg} className="w-100 p-2" alt="Full Image" loading="lazy" />
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <img src={list.firstimg} className="w-100 p-2" alt="First Image" loading="lazy" />
                                                </div>
                                                <div>
                                                    <img src={list.secondimg} className="w-100 mt-4 p-2" alt="Second Image" loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <h1 className="collaborate-text">{list.title}</h1>
                                                <p className="key-text">{list.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <img src={previous} className="w-25" alt="Previous" loading="lazy" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <img src={next} className="w-25" alt="Next" loading="lazy" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div
                className="sub-service-intro container-fluid space-read"
                style={{
                    backgroundImage: `url("https://s3.amazonaws.com/swiftinsights.ai/Amnetdigital_website_assets/enrich-img.svg")`,
                    backgroundAttachment: "scroll",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="w-90 mx-auto">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 new-subService-AIML-intro-caption">
                            <h2 className="textAnimation" data-text="Create Your Future!">
                                Enriching Experience
                            </h2>
                            <p className="pt-4 f-fm">
                                Join us at Amnet Services and be a part of a dynamic, forward-thinking team that values innovation, growth, and community. Here, you will find a supportive environment that encourages you to reach your full potential and make a meaningful impact. Discover a fulfilling career and a vibrant life at Amnet Services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-read">
                <Gotocontact />
            </div>

        </>
    )
}

export default AmnetDigital;