class DrawingBoard {
  /* Constructor */
  constructor(canvas, context, drawingBoardId) {
    this.canvas = canvas;
    this.context = context;
    this.objectsOnCanvas = [];
    let self = this;
    this.drawingBoardId = drawingBoardId;
    //each element has a mouse clicked and a mouse over
    this.canvas.addEventListener("click", function (e) {
      self.clickCanvas(e);
    });

    this.canvas.addEventListener("mousemove", function (e) {
      self.overCanvas(e);
    });
  }

  overCanvas(e) {
    //console.log("over");
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    console.log(this.mouseOffsetX, this.mouseOffsetY);
    //differentiate which canvas
    //you can remove the console.logs /// 
    if (this.drawingBoardId === "partA") {
      console.log("in A")
    }
    if (this.drawingBoardId === "partB") {
      console.log("in B")
    }
    if (this.drawingBoardId === "partC") {
      console.log("in C")
    }
    if (this.drawingBoardId === "partD") {
      console.log("in D")
    }
  }

  clickCanvas(e) {
    // had to look this fella up, so the code can see the canvas and the circles correctly
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    // i deleted the others assuming you would copy paste?
    if (this.drawingBoardId === "partA") {
      let circleClicked = false;
      //scanner part
      for (let i = 0; i < this.objectsOnCanvas.length; i++) {
        let circle = this.objectsOnCanvas[i];
        //kinda like the p5 scanner, sees if the x is in the radius of the circl
        let distance = Math.sqrt(
          Math.pow(this.mouseOffsetX - circle.x, 2) +
          Math.pow(this.mouseOffsetY - circle.y, 2)
        );
        if (distance <= circle.radius) {
          this.objectsOnCanvas.splice(i, 1);
          circleClicked = true;
        }
      }

      //adds new circ
      if (!circleClicked) {
        const colors = ["red", "blue", "orange", "lime", "black"];
        const randomC = colors[Math.floor(Math.random() * colors.length)];
        const randomR = Math.floor(Math.random() * 15) + 10;
        //the details for thy circle
        let newCircle = new CircularObj(
          this.mouseOffsetX,
          this.mouseOffsetY,
          randomR,
          randomC,
          randomC,// for the stroke!
          this.context,
          this.mouseOffsetX,
          this.mouseOffsetY,
          40
        );
        this.objectsOnCanvas.push(newCircle);
      }
    }
  }

  addObj(objToAdd) {
    this.objectsOnCanvas.push(objToAdd);
  }

  /* method to add display objects on canvas */
  display() {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].display();
    }
  }

  /* method to add animate objects on canvas */
  // had to make it so it could draw many circles
  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].update();
      this.objectsOnCanvas[i].display();
    }
  }

  run(videoElement) {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].update(videoElement);
      this.objectsOnCanvas[i].display();
    }

  }
}
