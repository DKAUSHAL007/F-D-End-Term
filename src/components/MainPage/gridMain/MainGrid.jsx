import React from "react";
import style from "./maingrid.module.css";
import { Link } from "react-router-dom";
function MainGrid({settutor, tutor }) {
  // console.log(tutor)
  return (
    <div className={style.tutorinfo}>
      <div className={style.imagecontainer}>
        <img className={style.image} src={tutor.imageUrl} alt="" />
      </div>
      <div className={style.detail}>
        <div className={style.name}>
          <h2>{tutor.firstName + " " + tutor.lastName}</h2>
          <div className={style.ratings}>
            <h4>{tutor.rating}/5</h4>
            <img
              width="20px"
              height="20px"
              src="https://cdn-icons-png.flaticon.com/512/1985/1985836.png"
              alt=""
            />
          </div>
        </div>
        <div className={style.subject}>
          <p>Subject: {tutor.subject}</p>
          <p>${tutor.price}/week</p>
        </div>

        <div className={style.parabutton}>
          <div className={style.paragraph}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio nostrum aperiam quo. Ratione sed ad facere vel quia, inventore aliquid libero maiores, odio omnis eum fuga minus atque sapiente! Commodi, quas neque labore odit et doloribus inventore nemo alias dolorem aliquam deleniti harum accusantium consequuntur voluptates quae beatae illo?</p>
          </div>
          <Link onClick={()=>{settutor(tutor)}} to="/abouttutor" className={style.button}>More Info</Link>
        </div>
      </div>
    </div>
  );
}
export default MainGrid;
