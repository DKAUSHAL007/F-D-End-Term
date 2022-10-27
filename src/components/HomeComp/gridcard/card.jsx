import React from "react";
import style from "./card.module.css";
function Card({ tutor }) {
  return (
    <>
      {/* {console.log(tutor)} */}
      <div className={style.container}>
        <img src={tutor.imageUrl} width="100%" height="100%"alt="" />
        <p className={style.name}>{tutor.firstName+" "+tutor.lastName}</p>
      </div>
    </> 
  );
}

export default Card;
