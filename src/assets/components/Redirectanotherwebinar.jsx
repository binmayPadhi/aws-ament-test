import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const RedirectanotherWebinar = () => {

    const navigate = useNavigate();
    useEffect(() => {
      navigate("/webinars/reshaping-the-retail-industry-through-AI");
    })
}

export default RedirectanotherWebinar;