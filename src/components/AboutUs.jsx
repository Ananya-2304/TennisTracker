import React from 'react';
import './AboutUs.css'; // Import the CSS file to style your About Us page
import collegeLogo from './college-logo.png'; // Path to the college logo image

function AboutUs() {
  return (
    <div className="about-us">
      <section className="letter">
        <h2>Letter from the Creators</h2>
        <p>
          Dear Readers,
        </p>
        <p>
          We are thrilled to present our project, which has been a significant part of our college journey. This endeavor, conceived as a college project for our Computer Graphics subject, represents not just an academic achievement but also a deep passion for sports analytics and computer vision.
        </p>
        <p>
          Our project focuses on analyzing tennis matches through advanced technologies. By leveraging YOLO for player and ball detection, and utilizing Convolutional Neural Networks (CNNs) for court keypoint extraction, we aim to bring new insights into tennis gameplay. This project is a blend of our interest in sports and our fascination with machine learning, and it serves as a stepping stone in our learning journey, preparing us for future challenges in the field.
        </p>
        <p>
          We are excited to share our work with you and hope it demonstrates the possibilities that arise when technology meets sports.
        </p>
        <p>
          Warm regards,
        </p>
        <p>
          <strong>Akhila V Raichur</strong><br />
          <strong>Ananya Bhat</strong>
        </p>
      </section>

      <section className="college-info">
      <img src={collegeLogo} alt="JSS Academy of Technical Education Logo" className="college-logo" />
        <div className="text">
          <h2>About JSS Academy of Technical Education</h2>
          <p>
            JSS Academy of Technical Education, Bangalore, offers a diverse range of undergraduate, postgraduate, and doctoral programs in various engineering and technology disciplines. Our institution is renowned for its well-equipped classrooms, advanced laboratories, research centers, and recreational spaces, all of which foster an environment conducive to learning, research, and technological innovation.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
