import React,{useState} from "react";
import style from "./navbar.module.css";
import { Link,useLocation } from "react-router-dom";

function Navbar({setinput}) {
  const location = useLocation();
  return (
    <>
      <div className={style.navbar}>
        <Link to="/" className={style.heading}>शिक्षक</Link>
        
        <ul className={style.list}>
          <li>
            {location.pathname !== "/" && location.pathname!=="/SignIn" && location.pathname!=="/SignUp" && (
              <>
                <Link className={style.link} to="/MainPage">
                  Find Tutors
                </Link>
                <Link className={style.link} to="/demo">
                  Become A Tutor
                </Link>
                <Link className={style.link} to="/About">
                  About
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
