import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import services from "../../Data/Services-Data/ExploreservicesData";

const AIservices = () => {
  const params = useParams();
  const history = useNavigate();
  useEffect(() => {
    console.log(params);
    services.map((res) => {
      if (res.serviceName === params.name) {
        console.log(res);
        let x = Object.values(res.sub);
        history(`/services/${params.name}/${x[0][0]["name"]}`);
      }
    });
  }, [params]);
};

export default AIservices;
