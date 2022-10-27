import React from "react";
import style from "./review.module.css";
function Review() {
  return (
    <div className={style.container}>
      <div className={style.userphoto}>
        <img src="https://www.svgrepo.com/show/264/user.svg" width="30" height="30"alt="" />
        <span><h3>user1</h3></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis a vitae quidem deleniti ducimus unde laudantium. Unde et, dolores quisquam blanditiis odio cum quibusdam libero sunt, aspernatur, explicabo non.</p>
      </div>
    </div>
  );
}

export default Review;
