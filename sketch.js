var text;
var gameState = "start";
var level1Button, level2Button, level3Button, level4Button, playButton;
var player, playerImg;
var ground;
var obstacle, obstacleImg;

function setup() {
	createCanvas(600,600);
	
	player = createSprite(250,250,20,20);
	player.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png", "sprite_3.png" );
	player.velocityX= 2;

	ground = createSprite(250,280,700,5);
	ground.shapeColor = "grey";
	
	
}

function creatingPlayButton() {
	text = createElement("h2");
	text.html("Space Jumpers");
	text.position(200,250)

	playButton = createButton('Play');
	playButton.position(250,300);

} 

function creatingLevelButtons(){
	level1Button = createButton('Level 1');
	level1Button.position(200,300);

	level2Button = createButton('Level 2');
	level2Button.position(300,300);

	level3Button = createButton('Level 3');
	level3Button.position(200,400);

	level4Button = createButton('Level 4');
	level4Button.position(300,400);
}

function level1ButtonPressed() {
	level1Button.mousePressed(()=>{
		background("pink");
		level1Button.hide();
		level2Button.hide();
		level3Button.hide();
		level4Button.hide();
		setup();
		gameState = "level1";
		
	})
}

function level2ButtonPressed() {
	level2Button.mousePressed(()=>{
		background("green");
		level1Button.hide();
		level2Button.hide();
		level3Button.hide();
		level4Button.hide();
	})
}

function level3ButtonPressed() {
	level3Button.mousePressed(()=>{
		background("blue");
		level1Button.hide();
		level2Button.hide();
		level3Button.hide();
		level4Button.hide();
	})
}

function level4ButtonPressed() {
	level4Button.mousePressed(()=>{
		background("red");
		level1Button.hide();
		level2Button.hide();
		level3Button.hide();
		level4Button.hide();
	})
}

function obstacles() {
	for(var i=0; i<= 5; i++) {
		obstacle = createSprite(250,270,20,20);
		obstacle.addAnimation("sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
		obstacle.velocityX = -2;
		gameState = "play";
	}

}
function draw() {

	if(gameState == "start"){
		background("yellow");
		creatingPlayButton();
		player.destroy();
		ground.destroy();

		playButton.mousePressed(()=>{
			removeElements();
			//playButton.hide();
			//text.hide();
			gameState = "begin";
			
		})
	}

	if(gameState == "begin") {
		creatingLevelButtons();
		level1ButtonPressed();
		level2ButtonPressed();
		level3ButtonPressed();
		level4ButtonPressed();
	}

	if(gameState == "level1") {
		background("pink");
		removeElements();
		obstacles();
	
	}

	drawSprites();

}