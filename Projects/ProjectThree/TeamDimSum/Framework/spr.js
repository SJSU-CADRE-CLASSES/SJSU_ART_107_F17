var canvas_width = 400;
var canvas_Height = 500;
fol_col_2 = 0;
fol_col_1 = 0;

var x = 100;
var y = 235;

var srcX = 0;
var srcY = 0;

var sheetWidth = 384;
var sheetHeight = 96;

var cols = 4;
var rows = 1;

var width =  sheetWidth / cols;
var height = sheetHeight/ rows;

var currentFrame = 0

var screen = new Image();
screen.src = "img/screen5.png";

var hung_bar = new Image();

hung_bar.src = "img/hunger_bar_edit_h.png";
var fo_bar = new Image();
fo_bar.src = "img/folw_bar.png";

var happybar = new Image();
happybar.src = "img/happybar_h.png";

var ball_sheet = new Image();
ball_sheet.src = "spr/spr_sheet_ball.png";

var apple_sheet = new Image();
apple_sheet.src = "spr/spr_sheet_apple.png";

var sleep_sheet = new Image();
sleep_sheet.src = "spr/spr_sheet_z.png";

var letter;
var spr_folder = "spr/spr_sheet_";

var spr_orig;  
var hunger_width = 269;
var textHungeryColor;
var happy_width = 200;

gen_ran_letter();

function gen_ran_letter() {
  var text = "";
  var possible = "ABCDEFGHI";

  for (var i = 0; i < 1; i++){
  		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
  		letter = text;
  		spr_orig = spr_folder + letter + ".png";
}

var current_spr = new Image();
current_spr.src = spr_orig;

var canvas = document.getElementById("canvas");
canvas.width = canvas_width;
canvas.height = canvas_Height;
var context = canvas.getContext('2d');

function updateFarme(){
	currentFrame = ++currentFrame % cols;
	srcX = currentFrame * width;
	srcY = 0;
	context.clearRect(x,y,width,height);
}

function incre(currentH){
	if(hungry_state > gettingHungry && hungry_state <= full){
	hunger_width = currentH-0.269;  
   }
   else if(hungry_state > hungry && hungry_state <= gettingHungry){
	hunger_width = currentH-0.538;
   }
   else if(hungry_state > starving && hungry_state <= hungry){
	hunger_width = currentH-0.807;
   }
   else{
	hunger_width = currentH-1.345;
   }
}

function drawHungarBar(h){
if(h >269){
		hunger_width = 269;
	}
	else{
		incre(h);
	}
	return  context.fillRect(70, 55, hunger_width, 30);
}

function getbarColor(){

	if(hungry_state >= gettingHungry){
		context.strokeStyle = "green";
		context.fillStyle = "#54f303";

	}
	else if(hungry_state >= hungry){
		context.strokeStyle = "#fda000";
		context.fillStyle = "#fdc500";
	}
	else if(hungry_state >= starving){
		context.strokeStyle = "#fc6f00";
		context.fillStyle = "#ff8a03";
	}
	else{
		context.strokeStyle = "red";
		context.fillStyle = "#fe4e1f"
	}
}

function happy_bar_animation(y){
	if(y >200){
		happy_width = 200;
	}
	else{
		happy_width = y - 2;
	}	
	return  	context.fillRect(70, 100, happy_width, 15);//contex.fillRect(209, hunger_y, 16, hunger_height);
}

function check_sheet(){
	if (play_ball == true){
		context.drawImage(current_spr, srcX, srcY, width, height, x+20, y, width+50, height+50);
		context.drawImage(ball_sheet, srcX, srcY, width, height, x+75, y, width+50, height+50);
	}
	else if (play_eat == true){
		context.drawImage(current_spr, srcX, srcY, width, height, x+20, y, width+50, height+50);
		context.drawImage(apple_sheet, srcX, srcY, width, height, x+20, y, width+50, height+50);
	}
	else if(play_z == true){
		context.drawImage(current_spr, srcX, srcY, width, height, x+20, y, width+50, height+50);
		context.drawImage(sleep_sheet, srcX, srcY, width, height, x+120, y-80, width+50, height+50);
	}
	else{
		context.drawImage(current_spr, srcX, srcY, width, height, x+20, y, width+50, height+50);
	}
}

function drawTamagotchi(){
	updateFarme();												//width // height
	context.drawImage(screen,46,43, 314,406);
	getbarColor();
	drawHungarBar(hunger_width);
	context.fillStyle= "blue";
	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(hunger_width+69,55);
	context.lineTo(hunger_width+69,85);
	context.stroke();
	context.drawImage(hung_bar, 50, 40, 300, 60);
	context.drawImage(fo_bar, 50, 117, 150,50);
	if (currentFollowers > 9){
		currentFollowers = 0;
		fol_col_2 ++;
	}
	else if(fol_col_2>9){
		fol_col_2 = 0;
		fol_col_1 ++;
	}
	else {
		
	}
	context.font = "40px DK";
	context.fillStyle = "black";
	context.fillText("H", 120, 83);
	context.fillText("U", 150, 83);
	context.fillText("N", 180, 83);
	context.fillText("G", 210, 83);
	context.fillText("R", 240, 83);
	context.fillText("Y", 270, 83);
	context.fillStyle= "blue";
	context.font = "35px DK";
	context.fillText(fol_col_1,85,154);
	context.fillText(fol_col_2,118,154);
	context.fillText(currentFollowers,152,154);
	context.fillStyle = "yellow";
	check_sheet();
	context.drawImage(happybar, 60, 95);
	happy_bar_animation(happy_width);
	context.font = "25px DK";
	context.fillStyle = "black";
	context.fillText("H", 140, 115);
	context.fillText("A", 155, 115);
	context.fillText("P", 170, 115);
	context.fillText("P", 185, 115);
	context.fillText("Y", 200, 115);
	}

setInterval(drawTamagotchi,100);













