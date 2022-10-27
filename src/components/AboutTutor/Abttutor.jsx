import React from "react";
import styles from "./abttutor.module.css";
import Review from "./Revieww/Review";
function Abttutor({ tutor,tutors }) {
  // console.log(tutor)
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={tutor.imageUrl} width="400" height="400" alt="" />
        <h2>{tutor.firstName + " " + tutor.lastName}</h2>
        <p>
          {tutor.description}
        </p>
      </div>

      <div className={styles.review}>
        <p className={styles.header}>Reviews</p>
        <hr />  
        <div className={styles.overallrating}>
          <div className={styles.leftside}>
            <p>32,555</p>
          </div>
          <div className={styles.rightside}>
            <p>{tutor.rating}</p>
            <img
              width="60px"
              height="60px"
              src="https://cdn-icons-png.flaticon.com/512/1985/1985836.png"
              alt=""
            />
          </div>
        </div>
      </div>
    <hr />
      <div className={styles.reviewsection}>
        {tutors.map((rev,i)=>
        i<6&&(
            <Review />
        ))}
      </div>
    </div>

  );
}

export default Abttutor;
