import React from "react";
import { Helmet } from "react-helmet";
import blog11 from "../../images/Resources-page/blog11.jpg";
import CTAIMG from "../../images/Resources-page/bloginventory.png";
import Voicebotdata from "../../Data/Resources-Data/Voicebot-Data";
import ai_voicebot from "../../images/Resources-page/ai-voicebot.jpg"


const VoiceBot = () => {
    const btnColor = {
        backgroundColor: "#ecac27",
        borderRadius: "50px",
        cursor: "pointer",
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>5 Ways AI Can Optimize Your Inventory Management | Amnet Digital</title>
                <meta name="title" content="5 Ways AI Can Optimize Your Inventory Management | Amnet Digital" />
                <meta name="description" content="AI will play a pivotal role in reshaping the retail landscape from personalizing customer experiences to optimizing supply chain and inventory management." />
                <meta name="keywords" content="AI for inventory management, AI to optimize inventory management, AI solutions for inventory management, inventory management AI solutions." />
            </Helmet>
            <div className="contact-us-intro container-fluid"></div>
            <div className="container-fluid">
                <div className="center">
                    <div className="new-home-about-details row ml-0 mr-0 above-spacings">
                        <div className="col-12 pl-0 pr-0 mb-5">
                            <h1>
                                Reinventing the Voice Assistant: How Our Next-Gen AI Voice Bot is Transforming Conversational AI
                            </h1>
                        </div>
                    </div>
                    <div className="row about-us-page-row ml-0 mr-0">
                        <div className="col-12 about-us-details p-0">
                            <img
                                loading="lazy"
                                className="img-fluid mb-5 w-100"
                                src={ai_voicebot}
                                alt="blog"
                            />
                        </div>
                    </div>
                    <div className="row  ml-0 mr-0">
                        {Voicebotdata.map((list) => {

                            switch (list.type) {

                                case 'paragraphs':
                                    return (
                                        <>
                                            <div className="col-12  p-0" key={list.id}>
                                                <p className="fs-14">{list.paragraph1}</p>
                                                <p className="fs-14">{list.paragraph2}</p>
                                            </div>
                                        </>
                                    );

                                case 'orderedList':
                                    return (
                                        <>
                                            <div key={list.id} className="blog_section">
                                                <p className="fs-24 font-weight-bold fw-bold">
                                                    {list.sub_heading}
                                                </p>
                                                {list.sub_heading_description && <p className="fs-14">{list.sub_heading_description}</p>}


                                                {list.hasOwnProperty("orderedlist") && list.orderedlist?.length > 0 && (
                                                    <ol className="pl-4">
                                                        {list.orderedlist.map((response, index) => (
                                                            <li key={index} className="fs-14 pb-3 goway-hlist">
                                                                {response.sidehead && (
                                                                    <span className="fs-14 fw-bold">{response.sidehead}</span>
                                                                )}
                                                                <span className="blog_section_body">{response.content} </span>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                )}

                                            </div>

                                        </>
                                    );

                                case 'main_orderedList':
                                    return (
                                        <>
                                            <div key={list.id} className="blog_section">
                                                <p className="fs-24 font-weight-bold fw-bold">
                                                    {list.sub_heading && list.sub_heading}
                                                </p>
                                                {list.sub_heading_description && <p className="fs-14">{list.sub_heading_description}</p>}

                                                {list.sub_heading_mains &&
                                                    list.sub_heading_mains.map((item, item_index) => (
                                                        <div key={item_index}>
                                                            <p className="fs-18 font-weight-bold fw-bold"> {item.subheader}</p>

                                                            {/* <ol className="pl-4"> */}
                                                            {item.content && item.content.map((contentItem, content_index) => (
                                                                <li key={content_index} className="fs-14 pb-3 goway-hlist">
                                                                    {contentItem.sidehead && (<span className="fs-14 fw-bold">{contentItem.sidehead}</span>)}
                                                                    <p className="fs-14 pb-3 goway-hlist"> {contentItem.content}</p>


                                                                    {/* index{content_index} */}
                                                                    <div className="inner-links">

                                                                        <ul>

                                                                            {
                                                                                contentItem.sub_heading_mains &&
                                                                                contentItem.sub_heading_mains.map((inner_item, inneritem_index) => (
                                                                                    <>

                                                                                        <li key={inneritem_index * 100} className="fs-14 pb-3 goway-hlist" >


                                                                                            {/* index{inneritem_index} */}
                                                                                            {inner_item.sidehead && (<span className="fs-14 fw-bold">{inner_item.sidehead}</span>)}
                                                                                            {inner_item.content}
                                                                                        </li>
                                                                                    </>

                                                                                ))
                                                                            }
                                                                        </ul>

                                                                    </div>

                                                                </li>))}

                                                        </div>


                                                    ))
                                                }

                                                {list.hasOwnProperty("orderedlist") && list.orderedlist?.length > 0 && (
                                                    <ol className="pl-4">
                                                        {list.orderedlist.map((response, index) => (
                                                            <li key={index} className="fs-18 pb-3 goway-hlist">
                                                                {response.sidehead && (
                                                                    <span className="fs-18 fw-bold">{response.sidehead}</span>
                                                                )}
                                                                {response.content}

                                                            </li>
                                                        ))}
                                                    </ol>
                                                )}

                                            </div>

                                        </>
                                    );

                                case 'conclusion':
                                    return (
                                        <>
                                            <div className="col-12 blog_section " key={list.id}>
                                                <p className="fs-24  font-weight-bold fw-bold">{list.heading}</p>
                                                <p className="fs-14">{list.description}</p>
                                                <b className="fs-14 conclusion_section">{list.question}</b>
                                                <p className="fs-14">Contact us at

                                                    <a href="mailto:info@amnetdigital.com" className="contact-email fs-14 email_margin" >
                                                        info@amnetdigital.com
                                                    </a>
                                                    to discover how our AI voice assistant can revolutionize your business.</p>
                                            </div>

                                        </>
                                    );

                            }

                        })}
                    </div>
                </div>
            </div>

            {/* NEW HOMEPAGE CAREER SECTION */}

            <div
                className="new-career-section"
                style={{
                    width: "auto",
                    height: "auto",
                    backgroundColor: "#19AF8F",
                    padding: "30px",
                    marginTop: "60px",
                }}
            >
                <div className="new-career-section w-90 mx-auto">
                    <div className="career-section-row row g-0">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-caption">
                            <h5>WORK WITH US</h5>
                            <h2>Let's Grow Together</h2>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-details">
                            <p>
                                We are on a mission to solve complex problems and provide
                                solutions that make a difference, Come work with us.
                            </p>
                            <a href="/contactus">
                                <button
                                    type="button"
                                    className="btn btn-default contact-us-button"
                                >
                                    Contact Us
                                </button>
                            </a>
                            <a href="/careers">
                                <button
                                    type="button"
                                    className="btn btn-default careers-button"
                                >
                                    Careers
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VoiceBot;
