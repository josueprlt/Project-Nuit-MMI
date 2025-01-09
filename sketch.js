let mails = 0
let totalMails = 0
let totalCO2 = 0
let cookiesPerClick = 1
let clicksPerSecond = 0
let isCookieClicked = false
let isUpgradeClicked = false
let isAutoClicked = false

let upgradeCost = 5
let autoClickerCost = 10


let bgImage;
let svgMail;

function preload() {
	bgImage = loadImage('/assets/motif-fond.png');
	svgMail = loadImage('/assets/mail.svg');
}


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(bgImage)

	// Ajouter les mails des clics automatiques chaque seconde
	if (frameCount % 60 == 0) {
		mails += clicksPerSecond
		totalMails += clicksPerSecond
		mailFromCO2(clicksPerSecond)
	}

	fill(0)
	textSize(20)
	textAlign(CENTER, CENTER)
	text('Nombre de mails actuels : ' + mails, width / 2, 50)
	if (totalCO2 >= 1000) {
		text('CO2 Production Avoided: ' + grammesToKg(totalCO2) + ' kg', width / 2, 110)
	}
	else if (totalCO2 >= 1000000) {
		text('CO2 Production Avoided: ' + totalCO2 + ' tonnes', width / 2, 110)
	}
	else {
		text('CO2 Production Avoided: ' + totalCO2 + ' g', width / 2, 110)
	}
	text(cookiesPerClick + ' mails par clic', width / 2, 140)
	text(clicksPerSecond + ' mails par seconde', width / 2, 170)

	if (isCookieClicked) {
		fill(255, 0, 0)
	} else {
		fill(255)
	}
	// rect(width / 2 - 250, height / 2 - 153, 500, 306)
	image(svgMail, width / 2 - 250, height / 2 - 153, 500, 306);
	stroke(1)

	fill(0)
	// text(upgradeCost + ' pour augmenter les clics', 0.25 * width, 0.875 * height)
	// text(autoClickerCost + ' pour un clic automatique', 0.75 * width, 0.875 * height)

	let colors = ['#D2533E', '#CFD23E', '#D2533E', '#CFD23E', '#D2533E'];
	let rectWidth = width / 5;
	let rectHeight = 200;
	let texts = [
		['Price : 10', 'Leaf', '1mail/sec'],
		['Price : 100', 'Sprout', '5mail/sec'],
		['Price : 500', 'Bush', '25mail/sec'],
		['Price : 1000', 'Tree', '50mail/sec'],
		['Price : 1500', 'Forest', '100mail/sec']
	];

	for (let i = 0; i < 5; i++) {
		fill(colors[i]);
		noStroke();
		rect(
			i * rectWidth, height - rectHeight,
			rectWidth, rectHeight
		);

		fill(0);
		textAlign(CENTER, CENTER);
		textSize(16);
		for (let j = 0; j < texts[i].length; j++) {
			text(
				texts[i][j],
				i * rectWidth + rectWidth / 2,
				height - rectHeight / 2 + (j - 1) * 20
			);
		}
	}
}

function mousePressed() {
	if (dist(mouseX, mouseY, width / 2, height / 2) <= 275) {
		isCookieClicked = true
		mails += cookiesPerClick
		totalMails += cookiesPerClick
		mailFromCO2(cookiesPerClick)
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
	isCookieClicked = false
	isUpgradeClicked = false
	isAutoClicked = false
}

function mailFromCO2(newMails) {
	let CO2Generated = newMails * 4 // 4g par mail
	totalCO2 += CO2Generated
}

function grammesToKg(grammes) {
	return (grammes / 1000).toFixed(2);
}
function grammesToTonnes(grammes) {
	return (grammes / 1000000).toFixed(2);
}
