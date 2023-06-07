import React, { useRef, useState } from "react";
import "../../CSS/Opportunities.css";
import OpeningsJson from "../../Data/Careers-Data/OpeningsData";



const CurrentOpenings = () => {
    const redirectTo = (e, path) => {
        sessionStorage.setItem("job", path)
    };
const [Openings, SetOpenings] = useState(OpeningsJson);
const [inputvalue, Setinputvalue] = useState("");
const SearchResults = (e) => {
    console.log(e);
    let searchvalue = OpeningsJson.filter(response =>
        response.role.trim().toLowerCase().includes(e.trim().toLowerCase())
      );
      SetOpenings(searchvalue);
};

const ClearResults = () => {
    Setinputvalue("");
    SetOpenings(OpeningsJson);
}

const sortJson = (e) => {
    console.log(e);
    Setinputvalue(e);
    if(e.length != 0){
        console.log(e);
        SearchResults(e)
    }else{
        ClearResults()
    }
} 

// const handleKeyPress = (event) => {
//     if(event.key === 'Enter'){
//       console.log('enter press here! ')
//     }
//   }

    // const {       
    //     formState: { },
    // } = useForm({
    //     resolver: yupResolver(),
    // });
    return (
        <>
            <h1 className="fs-40 fw-bold-600 text-center pt-5">CURRENT OPENINGS</h1>
            <div className="w-90 mx-auto">
                <p className="fs-23 fw-bold-600 mt-5">
                    Filter by
                </p>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-3">
                        <input className="input-search" type="text" value={inputvalue}  onChange={(e) => sortJson(e.target.value)} placeholder="Search for jobs by skill or keyword" />
                    </div>                  
                    <div className="col-lg-6 col-md-8 col-sm-12 mt-3">
                        {/* <button className="button-search" onClick={SearchResults}>Search</button> */}
                        <button className="clear ml-lg-4 ml-md-3 ml-sm-2 ml-xs-2" onClick={ClearResults}>Clear</button>
                    </div>
                </div>
                <div className="row">
                    {Openings.map((res) => {
                        return (
                            <>
                                <div className="col-lg-4 col-md-6 col-sm-12" key={res.id}>
                                    <div className="mt-4 application-container">
                                        <p className=" fs-12 fw-bold-400 text-green">
                                            {res.heading}
                                        </p>
                                        <p className="fw-bold-600 fs-18 mt-2">{res.role}</p>
                                        <p className="fw-bold-400 fs-12 text-grey">
                                            {res.location}
                                        </p>
                                        <p className="d-flex justify-content-end">
                                            <a className="fw-bold-600 apply-now fs-12 top-40 d-flex justify-content-end cr-pointer text-black"
                                                onClick={(e) => redirectTo(e, res.role)} href='/careers/applyjob'>{res.button} 
                                          </a>
                                        </p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>              
                {/* <div className="d-flex justify-content-center">
                    <button className="fs-14 fw-bold-600 button-exploremore">
                        Explore More Jobs
                    </button>
                </div> */}

            </div>
        </>
    )
}
export default CurrentOpenings;

