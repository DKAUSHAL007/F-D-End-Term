import React from "react";
import style from "./signup.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className={style.container}>
        <form className={style.form} onSubmit={(e)=>{e.preventDefault()}}>
          <h1>SIGN UP</h1>
          <label htmlFor="">Name</label>
          <input type="text" required />

          <label htmlFor="">Email</label>
          <input type="email" required />

          <label htmlFor="">Password</label>
          <input type="password" required />

          <label htmlFor="">Country</label>
          <input type="text"  required/>
        <div className={style.button}>
          <Link to="/MainPage" onClick={((e)=>(console.log("first")))} className={style.link}>Sign Up</Link>
        </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
