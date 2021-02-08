import React,{ Suspense } from "react";
import {Link} from "react-scroll";
import HomeBG from "../images/HomePage/home-bg.jpg";
import SolutionsServices from "../components/Homepage/SolutionsServices";
// import ClientSay from "../components/Homepage/ClientSay";
import AboutDetails from "../components/Homepage/AboutDetails";
import OurServicesSection from "../components/Homepage/OurServicesSection";
// import CaseStudiesSection from "../components/Homepage/CaseStudiesSection";
import OurPartner from "../components/Homepage/OurPartner";

// import IndusrtySection from "../components/Homepage/IndustrySection";

function Test (){

    const cookieStorage = {
        getItem: (item) => {
            const cookies = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
            return cookies[item];
        },
        setItem: (item, value) => {
            document.cookie = `${item}=${value};`
        }
    }
    
    const storageType = cookieStorage;
    const consentPropertyName = 'jdc_consent';
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);
    
    window.onload = () => {
    
        const acceptFn = event => {
            saveToStorage(storageType);
            consentPopup.classList.add('hidden');
        }
        const declineFn = event => {
            consentPopup.classList.add('hidden');
        }
        const consentPopup = document.getElementById('consent-popup');
        const acceptBtn = document.getElementById('accept');
        const declineBtn = document.getElementById("decline");
        acceptBtn.addEventListener('click', acceptFn);
        declineBtn.addEventListener("click", declineFn);
    
        if (shouldShowPopup(storageType)) {
            setTimeout(() => {
                consentPopup.classList.remove('hidden');
            }, 2000);
        }
    
    };

    const ClientSay = React.lazy(() => import('../components/Homepage/ClientSay'));
    const CaseStudiesSection = React.lazy(() => import('../components/Homepage/CaseStudiesSection'));
    const IndusrtySection = React.lazy(() => import('../components/Homepage/IndustrySection'));

    return(<>
            <div className="sub-service-intro container-fluid" style={{backgroundImage:`url(${HomeBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row service-new-all-margin">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2 className="textAnimation" data-text="Reimagine & Redefine">
                            Reimagine & Redefine
                            </h2>
                            <p>
                            Amnet Digital is enabling enterprises reimagine and redefine their engagement with 
                            employees, customers, partners and suppliers by providing intelligent 
                            insights and continuous value.
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
                            <button type="button" className="btn btn-default sub-service-view-details-btn">Learn more</button>
                        </Link>
                            </div>
                        </div>
                        </div>
            </div>

            {/* HOMEPAGE QUOTE SECTION */}
            <div className="homepage-quote homepage-news-text">
                <h2 className="text-center">
                    "AI-Enabled tools will generate $2.9 trillion in business value by 2021"
                </h2>
            </div>


            {/* NEW HOMEPAGE SOLUTION SERVICE SECTION */}
            <SolutionsServices />

            {/* NEW HOMEPAGE SOLUTION SERVICE SECTION */}
            <AboutDetails />

            {/* NEW HOMEPAGE INDUSTRIES SECTION */}
            <Suspense fallback={<div>Loading...</div>}>
            <IndusrtySection />
            </Suspense>
            

            {/* NEW HOMEPAGE OUR SERVICE SECTION */}
            <OurServicesSection />

            {/* NEW HOMEPAGE CASESTUDIES SECTION */}
            <Suspense fallback={<div>Loading...</div>}>
            <CaseStudiesSection />
            </Suspense>
            

            {/* NEW HOMEPAGE OUR PARTNER SECTION */}
            <div className="new-our-partner">
                <h1 className="section-title mt-3 text-center">RECOGNITIONS & PARTNERSHIPS</h1> 
                <OurPartner />
            </div>

            {/* NEW HOMEPAGE CLIENT SAY */}
            <Suspense fallback={<div>Loading...</div>}>
                <ClientSay />
            </Suspense>

        {/* NEW HOMEPAGE CAREER SECTION */}

        <div className="new-career-section" style={{width:"auto", height:"auto", backgroundColor:"#19AF8F", padding:"30px"}}>

                <div className="new-career-section new-all-margin">
        
                <div className="career-section-row row g-0">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-caption">
                        <h5>WORK WITH US</h5>
                        <h2>Let's Grow Together!</h2>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-details">
                        <p>We are on a mission to solve complex problems and provide solutions 
                            that make a difference! Come work with us!
                        </p>

                        <a href="/contactus">
                            <button type="button" className="btn btn-default contact-us-button" >Contact Us</button>
                        </a>
                        <a href="/careers">
                            <button type="button" className="btn btn-default careers-button">Careers</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="consent-popup" className="hidden cookies-banner">
            <div className="row">
                <div className="col-xl-8 col-lg-8">
                <p>This website uses cookies. We use cookies to optimize web functionality, collect website analytics and traffic data, and to provide a more personalized user experience.
                    <a className="cookies-readmore-link" href="/cookiespolicy">Read more...</a> 
            </p>
                </div>
                <div className="col-xl-4 col-lg-4 text-center">
                <button className="btn btn-default cookies-decline-btn" id="decline" >Decline</button>
                <button className="btn btn-default cookies-accept-btn" id="accept" >Accept</button>
                </div>
            </div>
        </div>
    </>)
}

export default Test;
