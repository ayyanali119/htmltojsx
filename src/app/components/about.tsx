import Image from "next/image";
import React from "react";

const About = () => {
    return ( 
<div>
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Explore Skill - Sagar Developer</title>
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
  />
  <section className="Sub-header">
    <nav>
      <a href="index.html" className="logo">
        Xplore
        <i className="fab fa-staylinked" />
        kill
      </a>
      <div className="nav-links" id="navLinks">
        {/* reposnive bar open and close */}
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="course.html">Course</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
      
      {/* reposnive bar open and close */}
    </nav>
    <h1>About Us</h1>
  </section>
  {/* About Us Section Start */}
  <section className="about-us">
    <div className="row">
      <div className="about-col">
        <h1>We are the world's largest University</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          cumque in accusantium molestias maiores fuga vitae eos, ducimus
          officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis
          aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum
          iste animi voluptatem fugiat totam excepturi dolor.
        </p>
        <a href="#" className="hero_btn btn">
          EXPLORE NOW
        </a>
      </div>
      <div className="about-col">
        <Image src={require("@/app/img/about.png)}")} alt={"avout"}
              </div>
    </div>
  </section>
  {/* About Us Section end */}
  {/* Footer Section start */}
  <section className="footer">
    <hr />
    <h4>About Us</h4>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
      incidunt odio nam facilis, eligendi
      <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
      exercitationem, illum molestiae dolorem.
    </p>
    <div className="icons">
      <i className="fab fa-facebook-f" />
      <i className="fab fa-instagram" />
      <i className="fab fa-twitter" />
      <i className="fab fa-linkedin" />
    </div>
    <p>
      Made with <i className="fas fa-heart" /> by{" "}
      <a href="#">Sagar Developer</a>
    </p>
    <p>
      Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights
      Reserved
    </p>
  </section>
  <div/>
  {/* Footer Section end */}
</>


    )
}
export default About
