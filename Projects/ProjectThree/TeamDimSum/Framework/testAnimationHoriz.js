var canvas_width = 400;
var canvas_Height = 500;
fol_col_2 = 0;
fol_col_1 = 0;
//used to position the frames
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
console.log(hung_bar.naturalWidth);
var fo_bar = new Image();
fo_bar.src = "img/folw_bar.png";

var happybar = new Image();
happybar.src = "img/happybar_h.png";




//new code
var letter;
var spr_folder = "spr/spr_sheet_";

var spr_orig;  
var spr_eat;  
var spr_play;  
var spr_sleep; 

gen_ran_letter();

function gen_ran_letter() {
  var text = "";
  var possible = "ABCDEFGHI";

  for (var i = 0; i < 1; i++){
  					//get char	//round the number//0 to 1 * 9
  		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
  		letter = text;
  		spr_orig = spr_folder + letter + ".png";
  		spr_eat = spr_folder + letter + "_eat.png";
  		spr_play = spr_folder + letter + "_play.png";
  		spr_sleep = spr_folder + letter + "_sleep.png";
  		console.log(spr_orig);
}


var current_spr = new Image();
current_spr.src = spr_orig;



var canvas = document.getElementById("canvas");
canvas.width = canvas_width;
canvas.height = canvas_Height;
var context = canvas.getContext('2d');
context.font = "30px Arial";


function updateFarme(){

	currentFrame = ++currentFrame % cols;//1 % 4 = 4; 2 % 4 = 2; 3 % 4 = 3; 4 % 4 = 1;

	srcX = currentFrame * width;
	srcY = 0;
	context.clearRect(x,y,width,height);
}

// var hunger_y = 205;
// var hunger_height = 120;

//var hunger_y = 110;
var hunger_width = 269;

function incre(currentH){
	if(hungry_state > gettingHungry && hungry_state <= full){
    //hunger_y = currentY + 0.269; //((120/full * 10))     0.12
	hunger_width = currentH-0.269;   //-0.12
   }
   else if(hungry_state > hungry && hungry_state <= gettingHungry){
     // hungery_state = hungery_state - 20;
     //hunger_y = currentY + 0.538;//((120/full * 10))  .....0.24
	hunger_width = currentH-0.538; //-0.24
   }
   else if(hungry_state > starving && hungry_state <= hungry){
    //hungery_state = hungery_state - 30;
    //hunger_y = currentY + 0.807;//((120/full * 10))  0.36
	hunger_width = currentH-0.807;// -0.36
   }
   else{
    //hungery_state = hungery_state - 50; 
    //hunger_y = currentY + 1.345;//((120/full * 10))  0.60
	hunger_width = currentH-1.345;//-0.6
   }
    
}

function drawHungarBar(h){
if(h >269){
		hunger_width = 269;
	}
	else{
		incre(h);
	}
	
	return  context.fillRect(70, 55, hunger_width, 30);//contex.fillRect(209, hunger_y, 16, hunger_height);
}








// 	if(hunger_y>= 110 && hunger_height>=0){

// 	incre(currentY, currentH);
// 	}
// 	else if (hunger_y<110)
// 	{
		
// 		hunger_y = 110;
// 		console.log("drawH "+hunger_y);
// 		hunger_height = 269;
// 	}
// 	else {
// 		hunger_height = 0;
		
// 	}
// 	// context.fillRect(hunger_y, 309, hunger_height,30 );
	
// 	return  context.fillRect(hunger_y-40, 60, hunger_height, 30);//contex.fillRect(209, hunger_y, 16, hunger_height);
// }

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

//var happy_y = 180;
var happy_width = 200;

function happy_bar_animation(y){

	if(y >200){
		happy_width = 200;
	}
	else{
		happy_width = y - 2;
	}	
	return  	context.fillRect(70, 100, happy_width, 15);//contex.fillRect(209, hunger_y, 16, hunger_height);
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


	context.fillText(fol_col_1,85,154);
	context.fillText(fol_col_2,118,154);
	context.fillText(currentFollowers,152,154);

	context.fillStyle = "red";
	context.drawImage(current_spr, srcX, srcY, width, height, x, y, width+100, height+100);
	context.drawImage(happybar, 60, 95);
	// context.fillRect(280, 180, 15, 200);
	happy_bar_animation(happy_width);
	
	}

setInterval(drawTamagotchi,100);













