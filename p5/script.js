let x, y, targetX, targetY, angle;
let delay = 1000; // seconds delay
let lastUpdateTime = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = width / 2;
    y = height / 2;
    setNewTarget();
    clear();
    // background(20); // Set the background to a gray color
}

function draw() {
    let currentTime = millis();
    if (currentTime - lastUpdateTime >= delay) {
        updatePosition();
        clear();
        // background(20); // Keep the background gray
        drawSVG(x, y, angle);
    }
}

function setNewTarget() {
    // Set a new target outside the canvas
    let side = int(random(4));
    if (side === 0) { // Left
        targetX = -102; // Adjusted to ensure it's outside
        targetY = random(height);
    } else if (side === 1) { // Right
        targetX = width + 102; // Adjusted to ensure it's outside
        targetY = random(height);
    } else if (side === 2) { // Top
        targetX = random(width);
        targetY = -102; // Adjusted to ensure it's outside
    } else { // Bottom
        targetX = random(width);
        targetY = height + 102; // Adjusted to ensure it's outside
    }
    lastUpdateTime = millis(); // Update the last update time
}

function updatePosition() {
    let speed = int(random(4, 10));
    angle = atan2(targetY - y, targetX - x);
    x += cos(angle) * speed;
    y += sin(angle) * speed;

    // Check if the object is out of bounds and set a new target if it is
    if (x < -100 || x > width + 100 || y < -100 || y > height + 100) {
        setTimeout(setNewTarget, delay); // Delay the new target setting
    }
}

function drawSVG(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    scale(-1, 1); // Inverser l'élément
    scale(0.5); // Réduire la taille de l'élément

    noStroke(); // Retirer le contour

    // Dessiner le premier triangle avec une couleur
    fill("#EAEAEA"); // Rouge
    beginShape();
    vertex(200.13, 74.4841);
    vertex(0.874221, 19.3688);
    vertex(200.5, 0.000561644);
    vertex(200.13, 74.4841);
    endShape(CLOSE);

    // Dessiner le deuxième triangle avec une autre couleur
    fill("#D9D9D9"); // Bleu
    beginShape();
    vertex(93.5, 24.5);
    vertex(200, 17.5);
    vertex(200, 50);
    vertex(93.5, 24.5);
    endShape(CLOSE);

    pop();
}