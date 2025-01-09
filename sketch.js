let mails = 0;
let totalMails = 0;
let totalCO2 = 0;
let cookiesPerClick = 1;
let clicksPerSecond = 0;
let isCookieClicked = false;
let isUpgradeClicked = false;
let isAutoClicked = false;

let passif = 0;
let leaf = 0;
let sprout = 0;
let bush = 0;
let tree = 0;
let forest = 0;

let upgradeCost = 5;
let autoClickerCost = 10;

let bgImage;
let svgMail;
let svgLeaf;
let svgSprout;
let svgBush;
let svgTree;
let svgForest;
let svgImages;

function preload() {
  bgImage = loadImage("/assets/motif-fond.png");
  svgMail = loadImage("/assets/mail.svg");
  svgMailsimple = loadImage("/assets/mailsimple.svg");

  svgLeaf = loadImage("/assets/leaf.svg");
  svgSprout = loadImage("/assets/sprout.svg");
  svgBush = loadImage("/assets/bush.svg");
  svgTree = loadImage("/assets/tree.svg");
  svgForest = loadImage("/assets/forest.svg");

  svgImages = [svgLeaf, svgSprout, svgBush, svgTree, svgForest];
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgImage);


  
  let textsSvg = [
    "x"+leaf,
    "x"+sprout,
    "x"+bush,
    "x"+tree,
    "x"+forest,
  ];

  // Ajouter les mails des clics automatiques chaque seconde
  if (frameCount % 60 == 0) {
    mails += clicksPerSecond;
    mails += passif;
    totalMails += clicksPerSecond;

    mailFromCO2(clicksPerSecond + passif);
  }

  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  fill("fff");

  text(mails, width / 2 - 10, 50);
  image(svgMailsimple, width / 2 + 10, 41, 25, 15);
  if (totalCO2 >= 1000) {
    text(
      "CO2 Production Avoided: " + grammesToKg(totalCO2) + " kg",
      width / 2,
      110
    );
  } else if (totalCO2 >= 10000) {
    text("CO2 Production Avoided: " + totalCO2 + " tonnes", width / 2, 110);
  } else {
    text("CO2 Production Avoided: " + totalCO2 + " g", width / 2, 110);
  }
  // text(cookiesPerClick + " mails par clic", width / 2, 140);
  // text(clicksPerSecond + " mails par seconde", width / 2, 170);

  if (isCookieClicked) {
    fill(255, 0, 0);
  } else {
    fill(255);
  }
  // rect(width / 2 - 250, height / 2 - 153, 500, 306)
  // Transition effect parametersdth / 2 - 250, height / 2 - 153, 500, 306);

  if (isCookieClicked) {
    push();
    translate(width / 2 - 250, height / 2 - 153 + 10);
    scale(0.95);
    image(svgMail, 0, 0, 500, 306);
    pop();
  } else {
    image(svgMail, width / 2 - 250, height / 2 - 153, 500, 306);
  }

  stroke(1);

  fill(0);
  // text(upgradeCost + ' pour augmenter les clics', 0.25 * width, 0.875 * height)
  // text(autoClickerCost + ' pour un clic automatique', 0.75 * width, 0.875 * height)

  let colors = ["#D2533E", "#CFD23E", "#D2533E", "#CFD23E", "#D2533E"];
  let rectWidth = width / 5;
  let rectHeight = 200;
  let texts = [
    ["Price : 10", "Leaf", "1mail/sec"],
    ["Price : 100", "Sprout", "5mail/sec"],
    ["Price : 500", "Bush", "25mail/sec"],
    ["Price : 1000", "Tree", "50mail/sec"],
    ["Price : 1500", "Forest", "100mail/sec"],
  ];

  for (let i = 0; i < 5; i++) {
    const rectId = `rect-${i}`;
    fill(colors[i]);
    noStroke();
    rect(i * rectWidth, height - rectHeight, rectWidth, rectHeight);

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);

    for (let j = 0; j < texts[i].length; j++) {
      let yOffset; // Initialisation de l'offset pour chaque texte et image

      if (j === 0) {
        // Premier texte (avec image)
        yOffset = -60;
      } else if (j === 1) {
        // Texte central
        yOffset = 0;
        push();
        textFont("Caveat");
        textSize(64);
        text(
          texts[i][j],
          i * rectWidth + rectWidth / 2,
          height - rectHeight / 2 + yOffset
        );
        pop();
      } else if (j === 2) {
        // Dernier texte
        yOffset = 60;
      }

      // Afficher le texte pour tous les cas (y compris le premier)
      if (j !== 1) {
        text(
          texts[i][j],
          i * rectWidth + rectWidth / 2,
          height - rectHeight / 2 + yOffset
        );
        if (j === 0) {
          image(svgMailsimple, i * rectWidth + rectWidth / 2 + 50, height - rectHeight / 2 + yOffset - 12, 30, 20);
        }
      }
    }

    // Exemple d'utilisation de rectId
    // console.log(`Rectangle ID: ${rectId}`);
  }

  for (let i = 0; i < textsSvg.length; i++) {
    let xOffset = 50; // Décalage horizontal entre les textes
    let yOffset = 10 + i * 70; // Décalage vertical constant

    // Dessiner les SVG
    image(svgImages[i], xOffset, yOffset, 50, 50);

    // Dessiner les textes associés
    fill("#fff"); // Couleur du texte
    textSize(39); // Taille du texte
    textAlign(LEFT, CENTER);
  
    text(textsSvg[i], xOffset + 70, yOffset + 25); // Décalage pour aligner à droite des images
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, width / 2, height / 2) <= 275) {
    isCookieClicked = true;
    mails += cookiesPerClick;
    totalMails += cookiesPerClick;
    mailFromCO2(cookiesPerClick);
  }

  // Leaf
  if (
    mouseX > 0 &&
    mouseX < width / 5 &&
    mouseY > height - 200 &&
    mouseY < height
  ) {
    if (mails >= 10) {
      mails -= 10;
      passif++;
      leaf++;
    }
  }

  // Sprout
  if (
    mouseX > width / 5 &&
    mouseX < (2 * width) / 5 &&
    mouseY > height - 200 &&
    mouseY < height
  ) {
    if (mails >= 100) {
      mails -= 100;
      passif += 5;
      sprout++;
    }
  }

  // Bush
  if (
    mouseX > (2 * width) / 5 &&
    mouseX < (3 * width) / 5 &&
    mouseY > height - 200 &&
    mouseY < height
  ) {
    if (mails >= 500) {
      mails -= 500;
      passif += 25;
      bush++;
    }
  }

  // Tree
  if (
    mouseX > (3 * width) / 5 &&
    mouseX < (4 * width) / 5 &&
    mouseY > height - 200 &&
    mouseY < height
  ) {
    if (mails >= 1000) {
      mails -= 1000;
      passif += 50;
      tree++;
    }
  }

  // Forest
  if (
    mouseX > (4 * width) / 5 &&
    mouseX < width &&
    mouseY > height - 200 &&
    mouseY < height
  ) {
    if (mails >= 1500) {
      mails -= 1500;
      passif += 100;
      forest++;
    }
  }

  // else if (mouseY > height * 0.75 && mouseX < width / 2 && mails >= upgradeCost) {
  // 	console.log('Level1');
  // 	isUpgradeClicked = true
  // 	cookiesPerClick++
  // 	mails -= upgradeCost
  // 	upgradeCost = parseInt(upgradeCost * 1.3)
  // }
  // else if (mouseY > height * 0.75 && mouseX >= width / 2 && mails >= autoClickerCost) {
  // 	console.log('Level2');
  // 	isAutoClicked = true
  // 	clicksPerSecond++
  // 	mails -= autoClickerCost
  // 	autoClickerCost = parseInt(autoClickerCost * 1.2)
  // }
}

function mouseReleased() {
  isCookieClicked = false;
  isUpgradeClicked = false;
  isAutoClicked = false;
}

function mailFromCO2(newMails) {
  let CO2Generated = newMails * 4; // 4g par mail
  totalCO2 += CO2Generated;
}

function grammesToKg(grammes) {
  return (grammes / 1000).toFixed(2);
}
function grammesToTonnes(grammes) {
  return (grammes / 100000).toFixed(2);
}
