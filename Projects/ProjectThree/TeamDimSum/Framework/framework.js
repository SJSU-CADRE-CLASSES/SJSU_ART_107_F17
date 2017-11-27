const full = 10000;
const gettingHungry = 7500;
const hungry = 5000;
const starving = 2500;
const dead = 0;
const possible = [ "likeforlike" , "inspirationalquotes" , "throwback" , "sunset" , "blackandwhite" , "bestoftheday" , "photography" ,  "love" ,  "me" , "cute" , "photooftheday" , "happy" , "beautiful" , "self" , "girl" , "picoftheday" , "smile" , "friends" , "fun" , "like" , "fashion" , "summer" , "igers" , "food" , "swag" , "amazing" , "style" , "wcw" , "family" , "lol" , "life" , "pretty" , "hair" , "my" , "sun" , "art" , "cool" , "bored" , "funny" , "girls" , "party" , "music" , "nature" , "beauty" , "night" , "fitness" , "beach" , "look" , "nice" , "sky" , "christmas" , "baby" ];

var currency = 50;

var currentFollowers = 0;

var personName;
var hungry_state;

var num_foll = 0;
//variable for adding followers
var follower_btn;

//random id and its read-only textbox
var userID_txbox;
var random_gen_code;

var otherIDs = possible;
//variable for a textbox for user to input other people's code
var otherIDs_txbox = document.querySelector("#fol_txt");

//variable for a textbox for read-only follows
//var follower_txbox;

//variable for a textbox for currency
var currency_txbox = document.querySelector("#cur_txt");;

//variable for hungerbar (use txt bar for now)
//var hungerbar_txbox;

var log_in_div = document.querySelector("#log_in");

//variable for feed button
var feed_btn; 

//variable for play button
var play_btn;

//variable for sleep button
var sleep_btn;


var submit_button_sound; //= new Audio();
//submit_button_sound.src = "sounds/Upgrading.wav";

var play_button_sound; //= new Audio();
//play_button_sound.src = "sounds/CoinSound.wav";

var feed_button_sound; //= new Audio();
//feed_button_sound.src = "sounds/LevelUp.wav";

var die_sound; //= new Audio();
//die_sound.src = "sounds/Lose.wav";

var invalid_sound; //= new Audio();
//invalid_sound.src = "sounds/LavaFall.wav";

var success_sound; //= new Audio();
//success_sound.src = "sounds/success.wav";

var play_ball = false;
var play_eat = false;
var play_z = false;
 
var submit_button_sound = new Audio();
submit_button_sound.src = "sounds/Upgrading.wav";
var play_button_sound  = new Audio();
play_button_sound.src = "sounds/CoinSound.wav";
var feed_button_sound = new Audio();
feed_button_sound.src = "sounds/LevelUp.wav";
var die_sound = new Audio();
die_sound.src = "sounds/Lose.wav";
var invalid_sound = new Audio();
invalid_sound.src = "sounds/LavaFall.wav";
var success_sound = new Audio();
success_sound.src = "sounds/success.wav";
var sleep_button_sound = new Audio();
sleep_button_sound.src = "sounds/exp2.wav";

 var testExp = new RegExp('Android|webOS|iPhone|iPad|' +
               'BlackBerry|Windows Phone|'  +
               'Opera Mini|IEMobile|Mobile' , 
              'i');

  if (testExp.test(navigator.userAgent)){

     document.querySelector("#eat_container").ontouchstart = function() {feed_btn_animation()};
     document.querySelector("#eat_container").ontouchend = function() {feed_btn2_animation()};
     document.querySelector("#play_container").ontouchstart = function() {play_btn_animation()};
     document.querySelector("#play_container").ontouchend = function() {play_btn2_animation()};
     document.querySelector("#sleep_container").ontouchstart = function() {sleep_btn_animation()};
     document.querySelector("#sleep_container").ontouchend = function() {sleep_btn2_animation()};
   }
          
  else{
     
     document.querySelector("#eat_container").onmousedown = function() {feed_btn_animation()};
     document.querySelector("#eat_container").onmouseup = function() {feed_btn2_animation()};
     document.querySelector("#play_container").onmousedown = function() {play_btn_animation()};
     document.querySelector("#play_container").onmouseup = function() {play_btn2_animation()};
     document.querySelector("#sleep_container").onmousedown = function() {sleep_btn_animation()};
     document.querySelector("#sleep_container").onmouseup = function() {sleep_btn2_animation()};
    }


function login() {

  submit_button_sound.play();
  var animation_script = document.createElement("SCRIPT");
  animation_script.src = "spr.js";
  document.querySelector("#body").appendChild(animation_script);
  document.querySelector("#eat_container").style.visibility = "visible"; 
  document.querySelector("#play_container").style.visibility = "visible"; 
  document.querySelector("#sleep_container").style.visibility = "visible"; 
  document.querySelector("#fol_container").style.visibility = "visible";
  document.querySelector("#cur_container").style.visibility = "visible";
  document.querySelector("#canvas").style.visibility = "visible";
  personName = document.getElementById("person_name").value;
  document.querySelector("#user_name").style.visibility = "visible";
  document.querySelector("#user_name").innerText = personName;
  document.querySelector("#person_name").style.display = "none";
  document.querySelector("#submit_btn").style.display= "none";
  document.querySelector("#log_in_container").style.position = "block";
  document.querySelector("#log_in_container").style.top = "0px";
  document.querySelector("#log_in_container").style.left = "0px";
  document.querySelector("#egg").style.visibility = "visible";
  makeid();
  document.querySelector("#myId").style.display = "inline";
  document.querySelector("#myId").setAttribute("value", "Your id is:  " + '"' + random_gen_code + '"');



  currency_txbox.setAttribute("value", "Your currency is :$ " + currency);
     var start =  setInterval(function() {
              if(tamagotchi.isAlive() == true){
              tamagotchi.timePasses();
              hungry_state = tamagotchi.foodLevel;
              }
              else{ 
                 die_sound.play();
                clearInterval(start);
                alert("Your tamagotchi is dead!!!");
                reset(); 
              }
                }, 100);     
}


function feed_btn_animation() {
  document.querySelector("#eat_b").style.visibility = "hidden";
  document.querySelector("#eat_b2").style.visibility = "visible";
  feed_tamagochi();
}

function feed_btn2_animation() {
   document.querySelector("#eat_b").style.visibility = "visible";
  document.querySelector("#eat_b2").style.visibility = "hidden";
}

function play_btn_animation() {
  play_button_sound.play();
  document.querySelector("#play_b").style.visibility = "hidden";
  document.querySelector("#play_b2").style.visibility = "visible";
 happy_width = happy_width + 60;
  // 
  var timer = 0;
  var begin = setInterval(function() {
    if(timer < 7){
      timer++;
      play_ball = true;
    } 
    else{
      play_ball = false;
      clearInterval(begin)
    }

  },100);

}

function play_btn2_animation() {
   document.querySelector("#play_b").style.visibility = "visible";
  document.querySelector("#play_b2").style.visibility = "hidden";
}

function sleep_btn_animation() {
  sleep_button_sound.play();
  document.querySelector("#sleep_b").style.visibility = "hidden";
  document.querySelector("#sleep_b2").style.visibility = "visible";
 happy_width = happy_width + 40;
  var timer = 0;
  var begin = setInterval(function() {
    if(timer < 7){
      timer++;
      play_z = true;
    } 
    else{
      play_z = false;
      clearInterval(begin)
    }

  },100);
}

function sleep_btn2_animation() {
   document.querySelector("#sleep_b").style.visibility = "visible";
  document.querySelector("#sleep_b2").style.visibility = "hidden";
  
}

function reset(){
window.location.reload(true);
}

function resetFollowertxtbox (){
   document.querySelector("#fol_txt").value = "";
}

function addFollowers(){
  if(otherIDs.indexOf(otherIDs_txbox.value) == -1 ){
        invalid_sound.play();
        otherIDs_txbox.value = "Invalid ID";
        return false;
  }

  else {
    otherIDs.splice(otherIDs.indexOf(otherIDs_txbox.value), 1 );
    success_sound.play();
    currentFollowers++
    num_foll = currentFollowers;
    currency +=10;
    currency_txbox.value = "Your currency is: $ " + currency;
    resetFollowertxtbox ();
    return true;
  }
  
}

function feed_tamagochi(){
  if(currency >0){
  feed_button_sound.play();
  currency-=10;
  currency_txbox.value = "Your currency is :$ " + currency;
  tamagotchi.feed();
  hunger_width = hunger_width + 26.9;
  var timer = 0;
  var begin = setInterval(function() {
    if(timer < 7){
      timer++;
      play_eat = true;
    } 
    else{
      play_eat = false;
      clearInterval(begin)
    }

  },100);
  }
}

var tamagotchi = {
  initialize: function (name) {
    this.name = name;
    this.foodLevel = full;
  },
  timePasses: function () {
   if(this.foodLevel > gettingHungry && this.foodLevel <= full){
    this.foodLevel = this.foodLevel - 10;
   }
   else if(this.foodLevel > hungry && this.foodLevel <= gettingHungry){
     this.foodLevel = this.foodLevel - 20;
   }
   else if(this.foodLevel > starving && this.foodLevel <= hungry){
    this.foodLevel = this.foodLevel - 30;
   }
   else{
    this.foodLevel = this.foodLevel - 50;
   }
  
  },
  isAlive: function () {
    if (this.foodLevel <= 0 || happy_width <=0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function() {
    this.foodLevel = this.foodLevel + 1000
    if (this.foodLevel >= full){
      this.foodLevel = full;
    }
    
  }
 
}

function makeid() {
  var text = "";
  text = possible[Math.floor(Math.random() * possible.length)];
  random_gen_code = text;
  otherIDs.splice(otherIDs.indexOf(random_gen_code), 1 );
}

tamagotchi.initialize("Tam");

















