import React from 'react';
import '../sub/AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-container">
      
      <div className="content-container">
      <video autoPlay muted loop id="background-video">
        <source src="/galaxy1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
        <div className="image-container">
          <img src="/Astronaut1.png" alt="About Us" />
        </div>
        <div className="description-container">
          <h1>About Us</h1>
          <p>
          Welcome! I am Pooja, a seasoned web development and data analytics professional with over 3 years of experience. 
          I combine deep expertise in programming and data-driven strategies to deliver comprehensive digital solutions. My skills 
          span from crafting dynamic websites using technologies like JavaScript and Python to deriving actionable insights with 
          analytics tools such as SQL and Tableau. Whether you're looking to optimize your digital presence or unlock the potential of your data, 
          I am here to help you achieve your business goals with precision and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
