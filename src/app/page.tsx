import Image from "next/image";
import Navbar from "./navbar";
import Course from "./components/course";
import Campus from "./components/campus";
import Testinomials from "./components/testinomial";
import Contactus from "./components/contactus";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Course/>
    <Testinomials/>
    <Contactus/>
   </div>
  );
}
