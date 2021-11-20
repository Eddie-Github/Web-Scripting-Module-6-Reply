"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: John Keating adjusted by Eddie
      Date:   11/17/2021

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/

let box = {
width: BOX_WIDTH,
height: BOX_HEIGHT,
xPos: 0,
yPos: 0
};


/*--------------- Class Code ----------------------*/
class ball {
    constructor() {
        this.radius = BALL_RADIUS;
        this.xPos = null;
        this.yPos = null;
        this.xVelocity = null;
        this.yVelocity = null;
    }
    moveWithin(container) {
        let ballTop = this.yPos;
        let ballLeft = this.xPos;
        let ballBottom = this.yPos + this.radius;
        let ballRight = this.xPos + this.radius;
        if (ballTop < 0 || ballBottom >= container.height) {
            container.yPos += this.yVelocity;
            this.yVelocity = -this.yVelocity;
            return;
        }
        if (ballLeft < 0 || ballRight >= container.width) {
            container.xPos += this.xVelocity;
            this.xVelocity = -this.xVelocity;
            return;
        }
        this.yPos += this.yVelocity;
        this.xPos += this.xVelocity;
    }
}

      /*---------------Interface Code -----------------*/
      // Reference to the container box
      let boxImage = document.getElementById("box");
      boxImage.style.width = BOX_WIDTH + "px";
      boxImage.style.height = BOX_HEIGHT + "px";
      boxImage.style.top = "0px";
      boxImage.style.left = "0px";

      // Reference to the Add Ball button
      let addBall = document.getElementById("addBall");

      addBall.onclick = function () {

         let ballImage = document.createElement("div");
         ballImage.className = "ball";
         ballImage.style.width = BALL_RADIUS + "px";
         ballImage.style.left = (BOX_WIDTH - BALL_RADIUS) / 2 + "px";
         ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS) / 2 + "px";
         let newBall = new ball();
         newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
         newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
         newBall.yVelocity = rand(-10, 10);
         newBall.xVelocity = rand(-10, 10);
         window.setInterval(movement, 25);
         function movement () {
            newBall.moveWithin(box);
            ballImage.style.top = newBall.yPos + "px";
            ballImage.style.left = newBall.xPos + "px";
            boxImage.style.top = box.yPos + "px";
            boxImage.style.left = box.xPos + "px";
         };


         // Append the ball image to the box
         boxImage.appendChild(ballImage);



      };


      /* Function to return a random value between minVal and maxValue */
      function rand(minVal, maxVal) {
         let size = maxVal - minVal + 1;
         return minVal + size * Math.random();
      }