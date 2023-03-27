import React from "react";
import webresources from "../../Data/Services-Data/ServicewebData";

const Resourceweb = () => {
    return (
        <>
            <div className="row">
                {
                    webresources.map(resourceweb => {
                        return (
                            <div className="col-lg-6 col-md-6 col-sm-12" key={resourceweb.id}>
                                <div className="card">
                                    <img src={resourceweb["top-image"]} className="blog-img" />
                                    <div className="ps-3 pl-3">
                                        <h1 className="blog-heading pb-4 pt-3">{resourceweb.heading}</h1>
                                        <p className="blog-para pb-4">{resourceweb.description}</p>
                                        <p className="learn">{resourceweb.learn}{"->"}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Resourceweb;