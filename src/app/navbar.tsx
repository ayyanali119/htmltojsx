import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        
          <div>
            <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Xplore Skill - Sagar Developer</title>
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
  />
  {/* Created BY - Sagar Developer */}
  <section className="header">
    <nav>
      <a href="index.html" className="logo">
        Xplore
        <i className="fab fa-staylinked" />
        kill
      </a>
      <div className="nav-links" id="navLinks">
        {/* Reposnive bar open and close */}
        <i className="fa fa-times" onclick="hideMenu()" />
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
      <i className="fa fa-bars" onclick="showMenu()" />
      {/* Reposnive bar open and close */}
    </nav>
    <div className="text_box">
      <h2>GET READY</h2>
      <p id="headtext">TO DISCOVER CAMPUS</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
        consequuntur corrupti sapiente aut porro
        <br /> esse blanditiis in quae perspiciatis quo.
      </p>
      <a href="#" className="hero_btn">
        Visit Us To Know More
      </a>
    </div>
  </section>
</>

          </div>

        
    )
}

export default Navbar