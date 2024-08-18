import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS file to style your home page

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isRemoving, setIsRemoving] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textStage, setTextStage] = useState(0); // 0 for firstText, 1 for secondText

  const firstText = 'POWERING SMARTER DECISIONS IN SPORTS.';
  const secondText = 'Welcome to TennisTrack';
  const typingSpeed = 150;
  const pauseTime = 2000;
  const removeSpeed = 50;

  useEffect(() => {
    let timer;
    if (textStage === 0) {
      // Typing the first text
      if (currentIndex < firstText.length) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev + firstText[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
      } else {
        // Pause before switching to second text
        timer = setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
          setTextStage(1); // Move to second text
        }, pauseTime);
      }
    } else if (textStage === 1) {
      // Typing the second text
      if (currentIndex < secondText.length) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev + secondText[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
      }
    }
    return () => clearTimeout(timer);
  }, [currentIndex, textStage]);

  return (
    <div className="home">
      <section className="video-section">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/input_videos/input_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="overlay-text">
          <h2 className={textStage === 1 ? 'large-text' : ''}>{displayText}</h2>
        </div>
      </section>
      <section className="descriptionSection">
        <h2>TRACKING GAME DATA<br />AND<br />ANALYTICS</h2>
        <p>TennisTrack is the leader in single-camera video tracking for tennis matches.</p>
        <p>Our AI-powered technologies provide rich and accurate player tracking data at scale,<br/> enabling viewers to efficiently identify and track<br/> the position and speed of the players and tennis ball.</p>
      </section>
      <section className="video-container">
        <video className="centered-video" controls>
          <source src="/output_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="featuresSection">
        <h2>Features</h2><br/>
        <div className="feature">
          <img src="/images/court_keypoints.jpg" alt="Court Keypoints" className="feature-image" />
          <div className="feature-text">
            <h3>Court Keypoints Detection</h3>
            <p>Detects 13 main points on the tennis court,<br/> providing essential data for analyzing player<br /> positions and movements.</p>
          </div>
        </div><br/>
        <div className="feature reversed">
          <div className="feature-text">
            <h3>Court, Player, and Ball Tracking</h3>
            <p>Uses green and yellow dots to indicate players and <br/>red points for keypoints, visualizing movement and <br/>positioning effectively.</p>
          </div>
          <img src="/images/graphics_tracking.png" alt="Tracking Graphics" className="feature-image"style={{ height: '400px', width: '300px' }} />
        </div><br/>
        <div className="feature">
          <img src="/images/yolo_detection.png" alt="YOLO Detection" className="feature-image" />
          <div className="feature-text">
            <h3>Player and Ball Detection Using YOLO</h3>
            <p>Employs YOLO object detection technology to identify and <br/>track players and balls with high accuracy.</p>
          </div>
        </div><br/>
        <div className="feature reversed">
          <div className="feature-text">
            <h3>Player and Shot Speeds</h3>
            <p>Displays current and average speeds <br/> for Player 1 and Player 2,<br/> as well as the speed of their shots.</p>
          </div>
          <img src="/images/speed.jpg" alt="Speed Tracking" className="feature-image" />
        </div><br/>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default Home;
