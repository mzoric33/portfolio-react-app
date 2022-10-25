import React from "react";
import classes from "./Omeni.module.scss";

const Omeni = () => {
  return (
    <div className={classes.omeni__content}>
      <h2 className={classes.omeni__content__title} id="omeni">
        O meni
      </h2>
      <div className={`${classes.section1} ${classes.section}`}>
        <p>
          Iz ljubavi prema računalima upisujem studij Informatike i tehnike na
          Prirodoslovno-matematičkom fakultetu u Splitu, no uz pomoć Hrvatske
          vojske i njihovog programa kadeti.
        </p>
        <img src="images/oblik.png" alt="" />
      </div>
      <div className={`${classes.section2} ${classes.section}`}>
        <img src="images/oblik.png" alt="" />
        <p>
          Dvije godine kasnije, zbog financijske nemogućnosti nastavka studija,
          vraćam se u rodno Đakovo i počinjem raditi na održavanju
          telekomunikacijske infrastrukture.
        </p>
      </div>
      <div className={`${classes.section3} ${classes.section}`}>
        <p>
          Nakon 6 godina iskustva u tom polju, upisujem tečaj za Web dizajn na
          Visokom učilištu Algebra, s ciljem da ostvarim svoj san i postanem web
          developer.
        </p>
        <img src="images/oblik.png" alt="" />
      </div>
    </div>
  );
};

export default Omeni;
