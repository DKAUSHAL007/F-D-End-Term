import React from "react";
import MainGrid from "./gridMain/MainGrid";
import style from "./mainpage.module.css";
function MainPage({settutor,tutors }) {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        {tutors.map((tutor) => (
          <>
            <MainGrid settutor={settutor} tutor={tutor} />
          </>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
