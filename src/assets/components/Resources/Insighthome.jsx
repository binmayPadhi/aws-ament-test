import React, { useState } from "react";
import blogImg from "../../images/HomePage/blog_banner.png";
// import "../../CSS/Insight.css";
import Letsgetstart from "../Webinars/Letsgetstart";
import { useNavigate } from "react-router-dom";
import Insightdata from "../../Data/Resources-Data/Insightdata";

const Insighthome = () => {
  const history = useNavigate();
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "50px",
    cursor: "pointer",
  };

  const navigateTowebinarspage = (id) => {
    history(`/blog/${id}`);
  };

  const [selectedId, setId] = useState("");
  const hightlightText = (id) => {
    setId(id);
  };

  const UnhightlightText = () => {
    setId("");
  };
  return (
    <>
      <div className="bg-insights mb-0">
        <div className="mt-5">
          <div
            className="sub-service-intro container-fluid"
            style={{
              backgroundImage: `url(${blogImg})`,
              backgroundAttachment: "scroll",
              backgroundRepeat: "no-repeat",
              margintop: "60px",
              backgroundSize: "cover",
            }}
          >
            <div className="bottom-img-insight w-90">
              <div className="w-90 mx-auto">
                <p className="fs-24 fw-bold-600 text-white">Blogs</p>
              </div>
            </div>
          </div>
        </div>

        <>
          {/* <!--CASE STUDIES SECTION--> */}
          <div className="row w-90 mx-auto new-case-studies-row ">
            {Insightdata.carddetails.map((list) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 col-xs-12 cr-pointer highlight-text d-flex align-items-strech mb-4"
                  key={list.id}
                  onClick={() => {
                    navigateTowebinarspage(list.id);
                  }}
                  onMouseEnter={() => {
                    hightlightText(list.id);
                  }}
                  onMouseLeave={() => {
                    UnhightlightText();
                  }}
                >
                  <div className="card animation-card-image mr-4 box_shadow">
                    <a
                      className="anchor_styles achorhover"
                      href={`/blog/${list.id}`}
                    >
                      <div className="card-header border-0 bgc-white p-0">
                        <img
                          src={list.image}
                          alt={list.title}
                          className="blog_images"
                        />
                      </div>
                      <div className="card-body propensity-modelling height-auto margin pb-2">
                        <h3 className="color-date">{list.date}</h3>
                        <h5 className="card-body-heading pb-0 pt-0">
                          {list.title}
                        </h5>
                        <p className="card_body_description">
                          {list.description}
                        </p>
                      </div>
                      <div className="card-footer border-0 bgc-white">
                        <p className="mb-2 anchor_styles">{`Read More ->`}</p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </>

        {/*Case Studies end*/}
      </div>
    </>
  );
};

export default Insighthome;
