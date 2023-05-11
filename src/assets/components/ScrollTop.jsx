import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {    
    if(pathname.includes("services") === true ) {    
      if (window.innerWidth > 1023) {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        })
      }
      else {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        })
      }
    }
    else{
      window.scrollTo(0, 0);
    }
    
  }, [pathname]);

  return null;
}
