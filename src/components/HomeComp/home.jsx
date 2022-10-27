import React from "react";
import style from "./home.module.css";
import Banner from "./banner/banner";
import Card from "./gridcard/card";
function Home({ tutors }) {
  return (
    <>
      <div className={style.container}>
        <Banner />
        <div className={style.home}>
          <p>22,4564 Teachers Available from all over the World!!</p>
        </div>
        <center>
        <h1>Our Top Teachers</h1>
        </center>
        <div className={style.grid}>
          {tutors.map((tutor, i) => 
            i < 10 && (
            <Card tutor={tutor} />
            )
          )}
        </div>
      </div>
      <footer className={style.footer}>
        <ul>
          <li><a target="_blank" href="https://github.com/DKAUSHAL007"><img src="https://cdn.iconscout.com/icon/free/png-64/github-1521500-1288242.png" alt="" /></a></li>
        </ul>
      </footer>
    </>
  );
}

export default Home;
