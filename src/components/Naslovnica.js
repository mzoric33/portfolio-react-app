import React from "react";
import classes from "./Naslovnica.module.scss";

const Naslovnica = () => {
  return (
    <>
      <div className={classes.hero__content}>
        <h1>
          Marin <span className={classes.orange}>Zorić</span>
        </h1>
        <p>
          Dobrodošli na moju portfolio web-stranicu. <br />
          Saznajte više o meni i mojim projektima.
        </p>
        <a className={classes.CTA__btn}>PREUZMI CV</a>
      </div>
      <div className={classes.hero}>
        <img
          src="images/oblik.png"
          alt="shape"
          className={classes.hero__shape}
        />
        <img src="images/me.png" alt="me" className={classes.hero__main} />
      </div>
    </>
  );
};

export default Naslovnica;
