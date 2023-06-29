import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showHandler = e => {
    setShowInfo(!showInfo);

    // //2. Another way to use handler
    // setShowInfo(prevShowInfo => {
    //   return !prevShowInfo;
    // });
  };
  return (
    <article className="question">
      <header>
        
        <button className="btn" onClick={showHandler}>
          <h4>{title}</h4>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p  className='fs-16'>{info}</p>}
    </article>
  );
};

export default Question;
