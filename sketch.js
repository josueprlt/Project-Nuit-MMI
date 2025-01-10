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

let svg15;
let svgAuto;
let svgx5;
let svgx15;

let svgImagesBoost;

let notifications;
let svgPlane;
let svgBreathing;
let svgRadio;
let svgTrash;
let svgShower;
let svgCloud;

let boolboost1 = false;
let boolboost2 = false;
let boolboost3 = false;
let boolboost4 = false;

let stopNotif = false;

function preload() {
  bgImage = loadImage("/assets/motif-fond.png");
  svgMail = loadImage("/assets/mail.svg");
  svgMailsimple = loadImage("/assets/mailsimple.svg");

  svgLeaf = loadImage("/assets/leaf.svg");
  svgSprout = loadImage("/assets/sprout.svg");
  svgBush = loadImage("/assets/bush.svg");
  svgTree = loadImage("/assets/tree.svg");
  svgForest = loadImage("/assets/forest.svg");

  svg15 = loadImage("/assets/suppr.svg");
  svgAuto = loadImage("/assets/AutoClick.svg");
  svgx5 = loadImage("/assets/Mailx5.svg");
  svgx15 = loadImage("/assets/Salex15.svg");

  svgImages = [svgLeaf, svgSprout, svgBush, svgTree, svgForest];
  svgImagesBoost = [svgx5, svgAuto, svgx15, svg15];

  svgPlane = loadImage("/assets/notifications/plane.svg");
  svgBreathing = loadImage("/assets/notifications/breathing.svg");
  svgRadio = loadImage("/assets/notifications/radio.svg");
  svgTrash = loadImage("/assets/notifications/trash.svg");
  svgShower = loadImage("/assets/notifications/shower.svg");
  svgCloud = loadImage("/assets/notifications/cloud.svg");

  notifications = [
    {
      title: "Congratulations!",
      message:
        "You’ve offset the equivalent of a flight from Paris to Berlin by plane.",
      svg: svgPlane,
    },
    {
      title: "Congratulations!",
      message: "You've eliminated as much CO₂ as a human's breathing",
      svg: svgBreathing,
    },
    {
      title: "Well done!",
      message:
        "You've saved the same CO₂ as watching an entire season of Wednesday",
      svg: svgRadio,
    },
    {
      title: "Well done!",
      message: "You've saved the same CO₂ as microwaving 200 popcorn bags",
      svg: svgTrash,
    },
    {
      title: "Great Job!",
      message:
        "You've eliminated the CO₂ equivalent of a quick 10-minute shower",
      svg: svgShower,
    },
    {
      title: "Great Job!",
      message:
        "You've eliminated the CO₂ impact of 100 GB stored in the cloud for a year",
      svg: svgCloud,
    },
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgImage);

  let textsSvg = [
    "x" + leaf,
    "x" + sprout,
    "x" + bush,
    "x" + tree,
    "x" + forest,
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
  if (totalCO2 >= 1000000) {
    text("CO2 Production Avoided: " + totalCO2 + " tonnes", width / 2, 110);
  } else if (totalCO2 >= 1000) {
    text(
      "CO2 Production Avoided: " + grammesToKg(totalCO2) + " kg",
      width / 2,
      110
    );
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
    translate(width / 2 - 250, height / 2 - 250 + 10);
    scale(0.95);
    image(svgMail, 0, 0, 500, 306);
    pop();
  } else {
    image(svgMail, width / 2 - 250, height / 2 - 250, 500, 306);
  }

  stroke(1);

  fill(0);
  // text(upgradeCost + ' pour augmenter les clics', 0.25 * width, 0.875 * height)
  // text(autoClickerCost + ' pour un clic automatique', 0.75 * width, 0.875 * height)

  let colors_circle = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
  let circleWidth = 30;
  let circleHeight = 30;

  for (let i = 0; i < 4; i++) {
    const circleId = `circle-${i}`;
    fill(colors_circle[i]);
    noStroke();
    circle(
      i * 75 + width / 2 - 120,
      height / 2 + 190,
      circleWidth,
      circleHeight
    );
    let circleX = i * 75 + width / 2 - 120;
    let circleY = height / 2 + 190;
    let imageSize = 30;
    image(
      svgImagesBoost[i],
      circleX - imageSize / 2,
      circleY - imageSize / 2,
      imageSize + 5,
      imageSize
    );
  }

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
          image(
            svgMailsimple,
            i * rectWidth + rectWidth / 2 + 50,
            height - rectHeight / 2 + yOffset - 12,
            30,
            20
          );
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

  if (totalCO2 >= 40 && !stopNotif) {
    createNotif("Congratulations!", "Première Notif", svgPlane);
    stopNotif = true;
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, width / 2, height / 2 - 70) <= 220) {
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

  // x5 Boost
  const x5BoostX = width / 2 - 120;
  const x5BoostY = height / 2 + 190;
  const x5BoostRadius = 30;
  if (
    dist(mouseX, mouseY, x5BoostX, x5BoostY) <= x5BoostRadius &&
    boolboost1 == true
  ) {
    
    cookiesPerClick += 5;
    setTimeout(() => {
      cookiesPerClick -= 5;
    }, 30000);

    boolboost1 = false;
    setTimeout(() => {
      boolboost1 = true;
    }, 10000);
  }

  // Auto Clicker
  const autoClickX = width / 2 - 120 + 75;
  const autoClickY = height / 2 + 190;
  const autoClickRadius = 30;
  if (dist(mouseX, mouseY, autoClickX, autoClickY) <= autoClickRadius) {
    passif += 10;
    setTimeout(() => {
      passif -= 10;
    }, 20000);
  }

  // x15 Boost
  const x15BoostX = width / 2 - 120 + 150;
  const x15BoostY = height / 2 + 190;
  const x15BoostRadius = 30;
  if (dist(mouseX, mouseY, x15BoostX, x15BoostY) <= x15BoostRadius) {
    passif *= 2;
    setTimeout(() => {
      passif /= 2;
    }, 60000);
  }

  // Special Boost
  const specialBoostX = width / 2 - 120 + 225;
  const specialBoostY = height / 2 + 190;
  const specialBoostRadius = 30;
  if (
    dist(mouseX, mouseY, specialBoostX, specialBoostY) <= specialBoostRadius 
  ) {
    mails += parseInt(mails/100 * 15);
    totalCO2 += parseInt(totalCO2/100 * 15);
    // Implement special boost functionality here
  }
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
  return (grammes / 1000000).toFixed(2);
}

function createNotif(title, message, svg) {
  // Créer une div pour contenir la notification
  const notif = document.createElement("div");
  notif.classList.add("card");

  // Ajouter le contenu HTML
  notif.innerHTML = `
    <div class="content">
      <div class="icon">
        ${svg}
      </div>
      <div>
        <strong style="font-size: 1.5em;">${title}</strong>
        <p style="font-size: 1.2em;">${message}</p>
      </div>
    </div>
    <button class="close-btn">&times;</button>
  `;

  // Ajouter un style CSS pour positionner la notification
  notif.style.position = "absolute";
  notif.style.left = `25px`;
  notif.style.bottom = `100px`;

  // Ajouter la notification au body (ou un autre conteneur DOM si nécessaire)
  document.body.appendChild(notif);
}
