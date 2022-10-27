import React from "react";
import style from "../SignUp/signup.module.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className={style.container}>
        <form className={style.form} onSubmit={(e)=>{e.preventDefault()}}>
          <h1>SIGN IN</h1>
          <label htmlFor="">User Name</label>
          <input type="text" required />

          <label htmlFor="">Email</label>
          <input type="email" required />

          <label htmlFor="">Password</label>
          <input type="password" required />

        <div className={style.button}>
          <Link to="/MainPage" className={style.link}>Sign In</Link>
        </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
