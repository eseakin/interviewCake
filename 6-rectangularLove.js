// A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.
// They need help writing an algorithm to find the intersection of two users' love rectangles.

// Write a function to find the rectangular intersection of two given love rectangles.

// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

//   Rectangles are entered as objects:
//   var myRectangle = {

//     // coordinates of bottom-left corner
//     leftX: 1,
//     bottomY: 5,

//     // width and height
//     width: 10,
//     height: 4,

// };

const rectLove = function(rect1, rect2) {

  const findOverlap = function(point1, length1, point2, length2) {
    const leftPoint = Math.max(point1, point2);
    const rightPoint = Math.min(point1 + length1, point2 + length2);

    // if no overlap, return null
    if(leftPoint >= rightPoint) {
      return {
        startPoint: null,
        length: null
      }
    }

    return {
      startPoint: leftPoint,
      length: rightPoint - leftPoint
    };
  }

  const xOverlap = findOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  const yOverlap = findOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  if(!xOverlap.length || !yOverlap.length) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null
    };
  }

  const result = {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.length,
    height: yOverlap.length
  }

  return result;

}