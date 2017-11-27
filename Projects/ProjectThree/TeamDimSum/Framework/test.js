

var letter;
var spr_folder = "spr/spr_sheet_";

var spr_orig;  
var spr_eat;  
var spr_play;  
var spr_sleep; 

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
}

gen_ran_letter();



console.log(letter);
console.log(spr_orig);
console.log(spr_eat);
console.log(spr_sleep);
console.log(spr_play);
