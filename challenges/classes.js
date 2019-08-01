// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Classes Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.


//  == Step 1: CuboidMaker2 class.  Base Class ==
class CuboidMaker2 {
    constructor(cuboidOptions) {
    // CuboidMaker2 accepts properties for length, width, and height
        this.length = cuboidOptions.length;
        this.width = cuboidOptions.width;
        this.height = cuboidOptions.height;
    }
// Formula for cuboid volume: length * width * height
    volume() {
        return (this.length * this.width * this.height);
    }
// Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
    surfaceArea() {
        return (2*(this.length * this.width + this.length * this.height + this.width * this.height));
    }
}
  
  /* == Step 4: Create a new object that uses CuboidMaker2 ==
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  })
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(cubeOptions) {
        super(cubeOptions);
        this.side = cubeOptions.side;
    }
    volume() {
        // return(this.side * this.side * this.side) // without using Math.pow to cube side
        return Math.pow(this.side, 3); // 
    }
    surfaceArea() {
        // return(6 * (side * side)) // without using Math.pow to square side
        return 6 * Math.pow(this.side, 2);
    }
}

const cube = new CubeMaker({
    side: 5
})

console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150