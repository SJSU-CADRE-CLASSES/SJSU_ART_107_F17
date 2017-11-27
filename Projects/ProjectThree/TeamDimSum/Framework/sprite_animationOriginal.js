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

//frameCount = 4;
// var ran_num;

// ran_num = Math.floor((Math.random() * 9) + 1);

// var egg = new Image();
// egg.src = "img/egg2.png";
var screen = new Image();
screen.src = "img/screen5.png";
// var eat_btn = new Image();
// eat_btn.src = "img/eat2.png";
var hung_bar = new Image();

hung_bar.src = "img/hunger_bar_edit.png";
console.log(hung_bar.naturalWidth);
var fo_bar = new Image();
fo_bar.src = "img/folw_bar.png";



var sprite1 = new Image();

switch (Math.floor((Math.random() * 9) + 1)) {
    
    case 1:
        sprite1.src = "sp/spr_sheet_A.png";
        break;
    case 2:
        sprite1.src = "sp/spr_sheet_B.png";
        break;
    case 3:
        sprite1.src = "sp/spr_sheet_C.png";
        break;
    case 4:
        sprite1.src = "sp/spr_sheet_D.png";
        break;
    case 5:
        sprite1.src = "sp/spr_sheet_E.png";
        break;
    case 6:
        sprite1.src = "sp/spr_sheet_F.png";
        break;
    case 7:
    	sprite1.src = "sp/spr_sheet_G.png";
    	break;
	case 8:
    	sprite1.src = "sp/spr_sheet_H.png";
    	break;
	case 9:
    	sprite1.src = "sp/spr_sheet_I.png";
}



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

var hunger_y = 110;
var hunger_height = 269;

function incre(currentY, currentH){
	if(hungry_state > gettingHungry && hungry_state <= full){
    hunger_y = currentY + 0.269; //((120/full * 10))     0.12
	hunger_height = currentH-0.269;   //-0.12
   }
   else if(hungry_state > hungry && hungry_state <= gettingHungry){
     // hungery_state = hungery_state - 20;
     hunger_y = currentY + 0.538;//((120/full * 10))  .....0.24
	hunger_height = currentH-0.538; //-0.24
   }
   else if(hungry_state > starving && hungry_state <= hungry){
    //hungery_state = hungery_state - 30;
    hunger_y = currentY + 0.807;//((120/full * 10))  0.36
	hunger_height = currentH-0.807;// -0.36
   }
   else{
    //hungery_state = hungery_state - 50; 
    hunger_y = currentY + 1.345;//((120/full * 10))  0.60
	hunger_height = currentH-1.345;//-0.6
   }
    
}

function drawHungarBar(currentY, currentH){

	//console.log(hunger_height);

	//1.2=1.1
	if(hunger_y>= 110 && hunger_height>=0){
	// hunger_y = currentY + 0.12;//((120/full * 10))
	// hunger_height = currentH-0.12;//((120/full * 10))

	incre(currentY, currentH);
	}
	else if (hunger_y<110)
	{
		
		hunger_y = 110;
		console.log("drawH "+hunger_y);
		hunger_height = 269;
	}
	else {
		hunger_height = 0;
		
	}
	return  context.fillRect(309, hunger_y, 30, hunger_height);//contex.fillRect(209, hunger_y, 16, hunger_height);
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

function drawTamagotchi(){

	updateFarme();												//width // height

	// contex.drawImage(egg, 0,100);
	context.drawImage(screen,46,43, 314,406);
	// contex.beginPath();
	// contex.fill(contex.arc(100,35,50,0,1*Math.PI));
	// contex.stroke();
	
	getbarColor();
	drawHungarBar(hunger_y, hunger_height);
	


	context.fillStyle= "blue";
	
	//contex.drawImage(hung_bar, 200, 200, 50, 300);
	//fda000//fc6f00//inside red:ff3d15
	context.lineWidth = 5;
	
	context.beginPath();
	context.moveTo(312,hunger_y+2);
	context.lineTo(339,hunger_y+2);
	context.stroke();
	context.drawImage(hung_bar, 300, 100, 50, 300);

	//contex.drawImage(fo_bar, 90, 195);
	context.drawImage(fo_bar, 50, 50, 150,50);

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


	context.fillText(fol_col_1,85,87);
	context.fillText(fol_col_2,118,87);
	context.fillText(currentFollowers,152,87);

	//contex.drawImage(sprite1, srcX, srcY, width, height, x, y, width, height);
	context.drawImage(sprite1, srcX, srcY, width, height, x-20, y-40, width+100, height+100);
	// Set rectangle and corner values

// var rectX = 50;
// var rectY = 50;
// var rectWidth = 100;
// var rectHeight = 301;
// var cornerRadius = 20;

// // Reference rectangle without rounding, for size comparison
// context.fillRect(200, 50, rectWidth, rectHeight);

// // Set faux rounded corners
// context.lineJoin = "round";
// context.lineWidth = cornerRadius;

// // Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
// context.strokeRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);

	
	}

setInterval(drawTamagotchi,100);













