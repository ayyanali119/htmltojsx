import Image from "next/image";
import React from "react";

const Campus = () => {
    return ( 
        <div>
            <>
            <>
  {/* Campus Section Start*/}
  <section className="campus">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>TAKE OUR VIRTUAL TOUR</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="campus-col">
        <Image
        src={require("@/app/img/Campus1.png")}
         alt="pic1" />
        <div className="layer">
          <h3>DELHI</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="img/Campus2.png" alt="pic2" />
        <div className="layer">
          <h3>HYDERABAD</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="img/Campus3.png" alt="pic3" />
        <div className="layer">
          <h3>MUMBAI</h3>
        </div>
      </div>
    </div>
  </section>
  {/* Campus Section End */}
</>

</>

        </div>

    )
}
export default Campus