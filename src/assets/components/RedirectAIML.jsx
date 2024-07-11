import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const RedirectAIML = () => {

    const navigate = useNavigate();
    useEffect(() => {
      navigate("/services/ai-ml");
    })
}


// const RedirectAIML = () => {
//   const params = useParams();
//   console.log(params,"welcine")
//     const navigate = useNavigate();
//     useEffect(() => {
 
//       services.map((res) => {
//         if (res.urlname === params.name) {
//           navigate("/services/${res.serviceName}");
//         }
//       });
//     })
// }

export default RedirectAIML;