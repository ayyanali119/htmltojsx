import Image from "next/image";
import React from "react";

const Facilities = () => {
    return ( 

        <div>
            <>
  {/* Facilities Section Start */}
  <section className="facilities">
    <div className="PageBlock">
      <div className="verticalLine" />
      <div className="Clear" />
    </div>
    <h1>Our Facilities</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="facilities-col">
        <Image src={require("@/app/img/libary.png")} alt="" />
        <h3>Best Libary</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
      <div className="facilities-col">
        <Image src={require("@/app/img/playground.png")} alt="" />
        <h3>Athletics</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
      <div className="facilities-col">
        <Image src={require("@/app/img/food.png")} alt="" />
        <h3>Tasty and Healthy Food</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
    </div>
  </section>
  {/* Facilities Section End */}
</>

        </div>
    
    
    )
}
export default Facilities