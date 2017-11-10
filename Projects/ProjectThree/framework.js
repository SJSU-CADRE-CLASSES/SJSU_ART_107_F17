


const full = 100;
const gettingHungry = 75;
const hungry = 50;
const starving = 25;
const dead = 0;

var tname;
var hungry_state;



  //document.getElementsByTagName("body").innerHTML = "heelo";

function login_btn() {
  personName = document.getElementById("person_name").value;
  //document.getElementById("person_name").value = "";
  
  document.querySelector("#log_in").removeChild(document.querySelector("#person_name"));

    var name_label = document.createElement("LABEL");
    var name_label_text = document.createTextNode(personName);
    name_label.appendChild(name_label_text);

  document.querySelector("#log_in").insertBefore(name_label,document.querySelector("#submit_btn"));
  //document.querySelector(".person_name");


    // var x = document.createElement("LABEL");
    // var t = document.createTextNode(personName);
    // x.setAttribute("for", "male");
    // x.appendChild(t);
    // document.getElementById("myForm").insertBefore(x,document.getElementById("male"));

  
console.log("personName");
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

  return text;
}

// console.log(makeid());





