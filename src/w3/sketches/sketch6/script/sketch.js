function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('pink');
}

function draw() {
  background('pink');
  fill(0);
  // if (mouseX > width / 2) {
  //   if (mouseY > height / 2) {
  //     rect(width / 2, height / 2, width / 2, height);
  //   } else {
  //     rect(width / 2, 0, width / 2, height / 2);
  //   }
  // } else {
  //   if (mouseY > height / 2) {
  //     rect(0, height / 2, width / 2, height);
  //   } else {
  //     rect(0, 0, width / 2, height / 2);
  //   }
  // }

  //6칸
  //   if (mouseX > width / 3) {
  //     if (mouseX > (2 * width) / 3) {
  //       if (mouseY > height / 2) {
  //         rect((2 * width) / 3, height / 2, width / 3, height / 2);
  //       } else {
  //         rect((2 * width) / 3, 0, width / 3, height / 2);
  //       }
  //     } else {
  //       if (mouseY > height / 2) {
  //         rect(width / 3, height / 2, width / 3, height / 2);
  //       } else {
  //         rect(width / 3, 0, width / 3, height / 2);
  //       }
  //     }
  //   } else {
  //     if (mouseY > height / 2) {
  //       rect(0, height / 2, width / 3, height / 2);
  //     } else {
  //       rect(0, 0, width / 3, height / 2);
  //     }
  //   }
  // }

  //간략하게
  if (mouseX > (2 / 3) * width) {
    if (mouseY > height / 2) {
      rect((2 / 3) * width, height / 2, width / 3, height / 2);
    } else {
      rect((2 / 3) * width, 0, width / 3, height / 2);
    }
  } else if (mouseX > width / 3) {
    if (mouseY > height / 2) {
      rect(width / 3, height / 2, width / 3, height / 2);
    } else {
      rect(width / 3, 0, width / 3, height / 2);
    }
  } else {
    if (mouseY > height / 2) {
      rect(0, height / 2, width / 3, height / 2);
    } else {
      rect(0, 0, width / 3, height / 2);
    }
  }
}
