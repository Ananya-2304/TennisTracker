import React from 'react';
import './Dataset.css'; // Import the CSS file to style your dataset page

function Dataset() {
  return (
    <div className="dataset">
      <section className="dataset-section">
        <h2>Dataset 1: Tennis Ball Detection</h2>
        <div className="dataset-info">
          <p><strong>Link:</strong> <a href="https://universe.roboflow.com/viren-dhanwani/tennis-ball-detection/dataset/6" target="_blank" rel="noopener noreferrer">Roboflow Tennis Ball Detection Dataset</a></p>
          <p><strong>Image Count:</strong> 578</p>
          <p><strong>TRAIN SET:</strong> 74% (428 Images)</p>
          <p><strong>VALID SET:</strong> 17% (100 Images)</p>
          <p><strong>TEST SET:</strong> 9% (50 Images)</p>
        </div>
      </section>

      <section className="dataset-section">
        <h2>Dataset 2: Tennis Court Detector</h2>
        <div className="dataset-info">
          <p><strong>Link:</strong> <a href="https://github.com/yastrebksv/TennisCourtDetector" target="_blank" rel="noopener noreferrer">GitHub Tennis Court Detector Dataset</a></p>
          <p><strong>Image Count:</strong> 8841</p>
          <p><strong>TRAIN SET:</strong> 75%</p>
          <p><strong>VALID SET:</strong> 25%</p>
          <p><strong>Image Resolution:</strong> 1280×720</p>
          <p><strong>Annotation:</strong> 14 annotated points per image</p>
          <p><strong>Download Link:</strong> <a href="https://drive.google.com/file/d/1lhAaeQCmk2y440PmagA0KmIVBIysVMwu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Google Drive</a></p>
          <p><strong>Dataset Collection:</strong> This dataset was created in a semi-automated way. Video highlights from different tournaments (2-3 minutes) were downloaded from YouTube. Frames from these videos were extracted (every 50 frames) and run through classical computer vision algorithms. Due to the low quality of the algorithms, the resulting images were manually filtered. Two types of postprocessing techniques were applied:</p>
          <ul>
            <li><strong>Refine keypoints using classical computer vision:</strong> Apply the intermediate model to one image.</li>
            <li><strong>Use homography to reconstruct shifted keypoints:</strong> Compare predicted points with reference ones using the homography matrix. This matrix provides one-to-one correspondence and helps to correct predicted points using reference points, which can be useful in cases of occlusion.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Dataset;
