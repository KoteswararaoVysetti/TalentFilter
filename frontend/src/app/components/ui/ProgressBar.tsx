import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }: any) => {
  const radius = 150; // Radius of the semi-circle
  const strokeWidth = 15; // Stroke width of the progress bar
  const center = radius + strokeWidth; // Center for positioning the circle

  const circumference = Math.PI * radius; // Circumference for the half-circle
  const offset = circumference - (progress / 100) * circumference; // Calculate the offset for progress

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: "300px",
        height: "150px",
      }}
    >
      <svg
        width={center * 2}
        height={center} // Adjust to half the height for the semi-circle
        viewBox={`0 0 ${center * 2} ${center}`} // Half-circle by limiting height
      >
        {/* Background Semi-Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#53b9aa" // Background color of the semi-circle
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Foreground Semi-Circle (progress) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#e4daf0" // Foreground progress color
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference} // Full circumference for the semi-circle
          strokeDashoffset={offset} // Offset based on progress
          style={{
            transition: "stroke-dashoffset 1s ease-out", // Smooth animation
            // transform: "rotate(180deg)", // Rotate the progress to start from the bottom
            transformOrigin: "center", // Ensure it rotates around the center
          }}
        />
      </svg>
      {/* Display Progress Percentage */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
