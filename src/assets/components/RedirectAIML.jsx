import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const RedirectAIML = () => {

    const navigate = useNavigate();
    useEffect(() => {
      navigate("/services/ai-ml");
    })
}




export default RedirectAIML;