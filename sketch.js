let totalCookies = 0
let cookiesPerClick = 1
let clicksPerSecond = 0
let isCookieClicked = false
let isUpgradeClicked = false
let isAutoClicked = false

let upgradeCost = 5
let autoClickerCost = 10
function setup() {
createCanvas(windowWidth, windowHeight)
}

function draw() {
	if(frameCount % 60 == 0) {
		totalCookies += clicksPerSecond
	}
	
	background(220)
	fill(0)
	textSize(20)
	textAlign(CENTER, CENTER)
	text('Total: ' + totalCookies, width/2, 50)
	text(cookiesPerClick + ' per click', width/2, 80)
	text(clicksPerSecond + ' per sec', width/2, 110)
	if(isCookieClicked) {
		fill(255, 0, 0)
	} else {
		fill(255)
	}
	ellipse(width/2, height/2, 100)
	if(isUpgradeClicked) {
		fill(255, 0, 0)
	} else {
		fill(255)
	}
	if(isAutoClicked) {
		fill(255, 0, 0)
	} else {
		fill(255)
	}
	fill(0)
	text('cookie', width/2, height/2)
	text(upgradeCost + ' upgrade', 0.25*width, 0.875*height)
	text(autoClickerCost + ' autoclicker', 0.75*width, 0.875*height)
}
function mousePressed() {
	if(dist(mouseX, mouseY, width/2, height/2) <= 100) {
		isCookieClicked = true
		totalCookies += cookiesPerClick
	} else if(mouseY > 300 && mouseX < width/2 && totalCookies >= upgradeCost) {
		isUpgradeClicked = true
		cookiesPerClick++
		totalCookies -= upgradeCost
		upgradeCost = parseInt(upgradeCost * 1.3)
	} else if(mouseY > 300 && mouseX >= width/2 && totalCookies >= autoClickerCost) {
		isAutoClicked = true
		clicksPerSecond++
		totalCookies -= autoClickerCost
		autoClickerCost = parseInt(autoClickerCost * 1.2)
	}
}
function mouseReleased() {
	isCookieClicked = false
	isUpgradeClicked = false
	isAutoClicked = false
}