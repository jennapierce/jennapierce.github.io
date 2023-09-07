$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(30,650,100,4);
    createPlatform(230,650,100,4);
    createPlatform(430,650,100,4);
    createPlatform(630,650,100,4);
    createPlatform(830,650,100,4);
    createPlatform(1030,650,100,4);
    createPlatform(1230,650,100,4);

    createPlatform(90,520,100,4);
    createPlatform(290,520,100,4);
    createPlatform(490,520,100,4);
    createPlatform(690,520,100,4);
    createPlatform(890,520,100,4);
    createPlatform(1090,520,100,4);
    createPlatform(1290,520,100,4);

    createPlatform(30,390,100,4);
    createPlatform(230,390,100,4);
    createPlatform(430,390,100,4);
    createPlatform(630,390,100,4);
    createPlatform(830,390,100,4);
    createPlatform(1030,390,100,4);
    createPlatform(1230,390,100,4);

    createPlatform(90,260,100,4);
    createPlatform(290,260,100,4);
    createPlatform(490,260,100,4);
    createPlatform(690,260,100,4);
    createPlatform(890,260,100,4);
    createPlatform(1090,260,100,4);
    createPlatform(1290,260,100,4);

    createPlatform(30,130,100,4);
    createPlatform(230,130,100,4);
    createPlatform(430,130,100,4);
    createPlatform(630,130,100,4);
    createPlatform(830,130,100,4);
    createPlatform(1030,130,100,4);
    createPlatform(1230,130,100,4);

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("steve", 50, 50);
    createCollectable("steve", 450, 50);
    createCollectable("steve", 850, 50);
    createCollectable("steve", 1250, 50);

    createCollectable("steve", 100, 200);
    createCollectable("steve", 500, 200);
    createCollectable("steve", 900, 200);

    createCollectable("steve", 50, 250);
    createCollectable("steve", 450, 250);
    createCollectable("steve", 850, 250);
    createCollectable("steve", 1250,250);


    createCollectable("steve", 100, 400);
    createCollectable("steve", 500, 400);
    createCollectable("steve", 900, 400);

    createCollectable("steve", 50, 550);
    createCollectable("steve", 450, 550);
    createCollectable("steve", 850, 550);
    createCollectable("steve", 1250, 550);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("right", 650, 4000);
    createCannon("left", 400, 2000);
    createCannon("right", 250, 4000);
    createCannon("top", 200, 2000);
    createCannon("bottom", 500, 4000);
    createCannon("top", 700, 2000);
    createCannon("bottom", 900, 4000);






    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
