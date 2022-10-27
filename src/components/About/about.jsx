import React from "react";
import style from "./about.module.css";
function About() {
  return (
  <div className={style.container}>
    <p className={style.title}>CONTRIBUTORS TO THIS PROJECT: </p>
    <p className={style.names}>Dishant Kaushal(2010991537)</p>
    <p className={style.names}>Gautam Garg(2010991537)</p>
    <p className={style.names}>Cheenu Arora(2010991246)</p>
    <p className={style.names}>Group 22</p>
    <a href="https://github.com/DKAUSHAL007"><p>https://github.com/DKAUSHAL007</p></a>
  </div>);
}

export default About;
