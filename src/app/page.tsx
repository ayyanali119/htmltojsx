import Image from "next/image";
import Navbar from "./navbar";
import Course from "./components/course";
import Campus from "./components/campus";
import Testinomials from "./components/testinomial";
import Contactus from "./components/contactus";
import Contact from "./components/contact";
import Facilities from "./components/facilities";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <Course/>
    <Campus/>
    <Facilities/>
    <Testinomials/>
    <Contact/>
    <Contactus/>

   
   </div>
  );
}
