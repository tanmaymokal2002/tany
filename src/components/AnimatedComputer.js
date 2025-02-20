import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";

const Sketch = (p5) => {
  let screenText = " DATA ";
  let textX = 200;
  let textY = 160;
  let glowAlpha = 100;
  let glowDirection = 1;
  let moveX = 1;
  let moveY = 1;
  let speed = 1.5;

  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    p5.textSize(14);
    p5.textAlign(p5.CENTER, p5.CENTER);
  };

  p5.draw = () => {
    p5.clear();
    p5.fill(180);
    p5.stroke(255);

    // Draw computer body
    p5.rect(90, 80, 220, 160, 10); // Monitor
    p5.rect(140, 250, 120, 20, 5); // Base
    p5.rect(170, 270, 60, 30, 5); // Stand

    // Screen glow effect
    glowAlpha += glowDirection * 2;
    if (glowAlpha > 150 || glowAlpha < 50) {
      glowDirection *= -1;
    }
    p5.fill("#ffcc55");
    p5.rect(100, 90, 200, 140, 5);

    // Draw screen border
    p5.fill("#181818");
    p5.rect(105, 95, 190, 130, 5);

    // Update text position (diamond motion)
    textX += moveX * speed;
    textY += moveY * speed;

    if (textX >= 280 || textX <= 120) {
      moveX *= -1;
    }
    if (textY >= 210 || textY <= 110) {
      moveY *= -1;
    }

    // Display animated text
    p5.fill("#ffcc55");
    p5.text(screenText, textX, textY);
  };
};

const ComputerAnimation = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default ComputerAnimation;
