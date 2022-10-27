import React from "react";
import style from "./banner.module.css";
import { Link, useLocation } from "react-router-dom";

function Banner() {
  const location = useLocation();
  return (
    <>
      <div className={style.banner}>
        <div className={style.leftside}>
          <p className={style.heading}>
            The Best Online Teachers for Private Lessons!!
          </p>
          <p className={style.para}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            mollitia expedita consequuntur accusamus quia labore quam unde
            maiores blanditiis voluptates natus ipsa recusandae cupiditate
            debitis reiciendis totam, dolorem officia laboriosam dolorum, sed
            quas. Incidunt harum dicta blanditiis tempora. Quis, veritatis? Sit
            voluptatem ducimus inventore magni nulla ea itaque totam fugit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
            tenetur earum perspiciatis nesciunt fugiat deserunt eveniet illum
            officia numquam autem.
          </p>
        </div>
        {/* <div className={style.rightside}>
          <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-tutor-university-flaticons-flat-flat-icons-3.png" />
        </div> */}
      </div>
      <div className={style.button}>
        <Link to={"/SignUp"}>Sign Up</Link>
        <Link to={"/SignIn"}>Sign In</Link>
      </div>
    </>
  );
}

export default Banner;
