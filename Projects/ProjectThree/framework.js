


const full = 100;
const gettingHungry = 75;
const hungry = 50;
const starving = 25;
const dead = 0;

var personName;
var hungry_state;
var second_btn;

//random id and its read-only textbox
var userID_txbox;
var random_gen_code;

//textbox for user to input other people's code
var otherIDs_txbox;

var log_in_div = document.querySelector("#log_in");

  //document.getElementsByTagName("body").innerHTML = "heelo";


//store name into a variable
//remove textbox where name was 
//insert a new label with the name where textbox use to be
//remove and create a new button
function login_btn() {
  personName = document.getElementById("person_name").value;
  
  log_in_div.removeChild(document.querySelector("#person_name"));

    var name_label = document.createElement("LABEL");
    var name_label_text = document.createTextNode(personName);
    name_label.appendChild(name_label_text);

  document.querySelector("#log_in").insertBefore(name_label,document.querySelector("#submit_btn"));
  console.log(personName);


  //remove the first button
  //create a new button for new page
  log_in_div.removeChild(document.querySelector("#submit_btn"));
  second_btn =  document.createElement("BUTTON");
  //create a text node for button
  second_btn_txt = document.createTextNode("second btn");
  second_btn.appendChild(second_btn_txt);
  log_in_div.appendChild(second_btn);

  //call the makeid function
  makeid();

  //create a read-only text box
  userID_txbox = document.createElement("INPUT");
  userID_txbox.setAttribute("value", random_gen_code);
  userID_txbox.setAttribute("readonly", "true");
  log_in_div.appendChild(userID_txbox);
  // console.log(code_txbox);

  //create a text box for user to enter other people's code

}




var tamagotchi = {

  //name
  initialize: function (name) {
    this.name = name;
    this.foodLevel = full;
    //console.log(this.name);
    //console.log(this.foodLevel);
    // play
    //sleep
    //etc
  },
  timePasses: function () {
   
   //foodlevel drop by 1 every second
    this.foodLevel = this.foodLevel - 1;
    //console.log(this.foodLevel);
    // this.playLevel = this.playLevel - 2;
    // this.sleepLevel = this.sleepLevel - 2;
  },
  isAlive: function () {
    if (this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function() {
    this.foodLevel = this.foodLevel + 1
  }//,
  // playUp: function() {
  //   this.playLevel = this.playLevel + 1
  // },
  // sleepUp: function() {
  //   this.sleepLevel = this.sleepLevel + 1
  // }
}



tamagotchi.initialize("apple");
tamagotchi.timePasses();
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 4; i++)
  					//get char	//round the number//0 to 1 * 64
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  random_gen_code = text;
}

// console.log(makeid());





