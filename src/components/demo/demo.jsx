import React,{useState} from "react";
import styles from "./demo.module.css";
function Demo() {
  const [apply, setapply] = useState(false);
  console.log(apply)
  return (
    <>
      <div className={styles.demo}>
        <center>
          <h1>Become a Tutor</h1>
        </center>
        <form className={styles.form} action="">
          <label className={styles.label} htmlFor="">
            Name
          </label>
          <input className={styles.input} type="text" required/>
          <label className={styles.label} htmlFor="">
            Email
          </label>
          <input className={styles.input} type="email" required />
          <div className={styles.gender}>
            <label className={styles.label} htmlFor="">
              Gender
            </label>
            <div>
              <input className={styles.input} name="gender" type="radio" required/>
              <span>Male</span>
              <input className={styles.input} name="gender" type="radio" required/>
              <span>Female</span>
            </div>
          </div>
          <label className={styles.label} htmlFor="">
            Phone Number
          </label>
          <input className={styles.input} type="number" required/>
          <label className={styles.label} htmlFor="">
            Address
          </label>
          <input className={styles.input} type="text" required/>
          <label className={styles.label} htmlFor="">
            Country
          </label>
          <input className={styles.input} type="text" required/>
          <label className={styles.label} htmlFor="">
            Education
          </label>
          <input className={styles.input} type="text" required/>

          <label htmlFor="" className={styles.label}>
            Certificates
          </label>
          <input type="file" />

          <button
            type="submit"
            onClick={() => {
              setapply(true);
            }}
          >
            Apply for Evaluation
          </button>
        </form>
      </div>
    </>
  );
}

export default Demo;
