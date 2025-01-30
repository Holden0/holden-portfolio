import Image from "next/image";
import styles from "./page.module.css";
import Navbar from '../components/Navbar.js';  // Adjust the path if needed

export default function HomePage() {
  return (
    <div>
      <Navbar />  {/* This will render the Navbar on the home page */}
      <h1>Welcome to My Portfolio</h1>
      {/* Other content */}
    </div>
  );
}