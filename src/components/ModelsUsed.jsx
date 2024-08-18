import React from 'react';
import './ModelsUsed.css'; // Import the CSS file to style your models used page
import flowchart from './flowchart.png'; // Path to the flowchart image

function ModelsUsed() {
  return (
    <div className="models-used">
      <section className="intro">
        <h2>Introduction</h2>
        <p>
          This project analyzes tennis players in a video to measure their speed, ball shot speed, and number of shots. It detects players and the tennis ball using YOLO and utilizes CNNs to extract court keypoints. This hands-on project is perfect for polishing your machine learning and computer vision skills.
        </p>
      </section>

      <section className="model-details">
        <h2>Models and Methods Used</h2>
        <div className="model-info">
          <div className="model-text">
            <h3>1. YOLOv8 for Player Detection</h3>
            <p>
              YOLOv8 (You Only Look Once version 8) is employed for detecting players in the video. YOLO is known for its speed and accuracy in object detection, making it suitable for real-time applications such as tracking players in sports videos.
            </p>

            <h3>2. Fine-Tuned YOLO for Tennis Ball Detection</h3>
            <p>
              A fine-tuned version of YOLOv5 is used for detecting tennis balls. The model has been specifically trained to recognize tennis balls with high precision.
            </p>

            <h3>3. Court Key Point Extraction</h3>
            <p>
              Convolutional Neural Networks (CNNs) are used to extract keypoints from the tennis court. This involves identifying specific points on the court that can be used for various analyses, such as player positioning and ball trajectory.
            </p>
          </div>
          <img src={flowchart} alt="Flowchart of Models Used" className="flowchart" />
        </div>
      </section>
    </div>
  );
}

export default ModelsUsed;
