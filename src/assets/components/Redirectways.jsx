import React from "react";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
const Redirectways = () => {

    const navigate = useNavigate();
    useEffect(() => {
        navigate("/blogs/seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry");
    })


}
export default Redirectways;