import React from "react";
import "./Conatct.scss";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="left">
        <h2>Good stuff coming your way</h2>
              <p>Be the first to know about all things Ace & Tate — think fun events, <br /> product drops and special releases. Yup, good stuff.</p>
              <div className="input-wrapper">
                  <input placeholder="Email" type="text" />
                  <button>Submit</button>
              </div>
              <p className="policy">Check our <span>privacy policy</span> for more info on how we collect data and process information.</p>
      </div>
          <div className="right">
              <h2>Our stores</h2>
              <div className="image-wrapper">
                  <img src="https://images.aceandtate.com/image/upload/f_auto,c_limit,w_1080,q_75/v1557493560/homepage/services-stores.jpg" alt="" />
                  <p>Drop by your nearest store, get a free <br/> eye test, and get yourself some<br/> personal style advice. We look pretty<br/> good IRL — just sayin'.</p>
              </div>
              <span>All stores</span>
      </div>
    </div>
  );
};
