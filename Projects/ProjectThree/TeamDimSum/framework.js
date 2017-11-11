


const full = 100;
const gettingHungry = 75;
const hungry = 50;
const starving = 25;
const dead = 0;

var currency = 50;

var currentFollowers = 0;

var tam_hungry_level;

var personName;
var hungry_state;

//variable for adding followers
var follower_btn;

//random id and its read-only textbox
var userID_txbox;
var random_gen_code;

//variable for a textbox for user to input other people's code
var otherIDs_txbox;

//variable for a textbox for read-only follows
var follower_txbox;

//variable for a textbox for currency
var currency_txbox;

//variable for hungerbar (use txt bar for now)
var hungerbar_txbox;

var log_in_div = document.querySelector("#log_in");

//variable for feed button
var feed_btn; 

//variable for play button
var play_btn;

//variable for sleep button
var sleep_btn;

  //document.getElementsByTagName("body").innerHTML = "heelo";


//store name into a variable
//remove textbox where name was 
//insert a new label with the name where textbox use to be
//remove and create a new button
//create html elements for the page 
function login() {

  personName = document.getElementById("person_name").value;
  
  log_in_div.removeChild(document.querySelector("#person_name"));

    var name_label = document.createElement("LABEL");
    var name_label_text = document.createTextNode(personName);
    name_label.appendChild(name_label_text);
    //name_label.id = "ij";
    //name_label.style.visibility = "hidden";
  document.querySelector("#log_in").insertBefore(name_label,document.querySelector("#submit_btn"));
  console.log(personName);




  //call the makeid function
  makeid();

  //create a read-only text box
  userID_txbox = document.createElement("INPUT");
  userID_txbox.setAttribute("value", "Your id is: " + random_gen_code);
  userID_txbox.setAttribute("readonly", "true");
  log_in_div.appendChild(userID_txbox);
  // console.log(code_txbox);

  //create a text box for user to enter other people's code
  otherIDs_txbox = document.createElement("INPUT");
  otherIDs_txbox.setAttribute("name", "other ids");
  otherIDs_txbox.setAttribute("value", "Add other id here")
  log_in_div.appendChild(otherIDs_txbox);

    //remove the first button
  //create a new button for new page
  log_in_div.removeChild(document.querySelector("#submit_btn"));
  follower_btn =  document.createElement("BUTTON");
  //create a text node for button
  follower_btn_txt = document.createTextNode("follower btn");
  follower_btn.appendChild(follower_btn_txt);
  log_in_div.appendChild(follower_btn);
//   follower_btn.onclick = function() {
//    alert("button was clicked");
// }​;​
follower_btn.onclick = function() {addFollowers()};


  //create textbox for followers
  follower_txbox = document.createElement("INPUT");
  follower_txbox.setAttribute("value", "no followers so far");
  follower_txbox.setAttribute("readonly", "true");
  log_in_div.appendChild(follower_txbox);

  //creat a text box for storing currency
  currency_txbox = document.createElement("INPUT");
  currency_txbox.setAttribute("value", "Your currency is : $" + currency);
  currency_txbox.setAttribute("readonly", "true");
  log_in_div.appendChild(currency_txbox);

  //create hungry bar(using text box for now)
  hungerbar_txbox = document.createElement("INPUT");
  hungerbar_txbox.setAttribute("value", "Hungry level is: " + tamagotchi.foodLevel);
  hungerbar_txbox.setAttribute("readonly", "true");
  log_in_div.appendChild(hungerbar_txbox);

  //create feed button
  feed_btn = document.createElement("BUTTON");
  var feed_btn_tx = document.createTextNode("Feed ME");
  feed_btn.appendChild(feed_btn_tx);
  log_in_div.appendChild(feed_btn);
  feed_btn.onclick = function() {feed_tamagochi()};

  //create play button
  play_btn = document.createElement("BUTTON");
  var play_btn_tx = document.createTextNode("Play with ME");
  play_btn.appendChild(play_btn_tx);
  log_in_div.appendChild(play_btn);

  //create sleep btn
  sleep_btn = document.createElement("BUTTON");
  var sleep_btn_tx = document.createTextNode("Sleep?");
  sleep_btn.appendChild(sleep_btn_tx);
  log_in_div.appendChild(sleep_btn);


  //set timer and lower hungerbar(same as tamagachi food level)
var countdown = setInterval(function() {

        if(tamagotchi.foodLevel != 0){
        tamagotchi.timePasses();
        hungerbar_txbox.value = "Hungry level is: " + tamagotchi.foodLevel;
        console.log(tamagotchi.foodLevel);
        }
        else{
           clearInterval();
           reset();
        }
          }, 1000);
        
    
}

//reset everything
function reset(){

}



//function for adding followers 
function addFollowers(){
  //test is id exist(for no, test if text is xxxx)
  //if it does, increase follower count 
  if(otherIDs_txbox.value != ""){
    currentFollowers++
    follower_txbox.value = currentFollowers;
    otherIDs_txbox.value = "";
    currency +=10;
    currency_txbox.value = "Your currency is :$ " + currency;
  }
}



//function for feeding tamagochi
function feed_tamagochi(){
  if(currency >0){
  currency-=10;
  currency_txbox.value = "Your currency is :$ " + currency;
  tamagotchi.feed();
  hungerbar_txbox.value = "Hungry level is: " + tamagotchi.foodLevel;
  console.log(tamagotchi.foodLevel)
  }
  else{

  }
  // console.log(tam_hungry_level);
}


var tamagotchi = {

  //name
  initialize: function (name) {
    this.name = name;
    this.foodLevel = hungry;
    //tam_hungry_level = this.foodLevel;
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
    this.foodLevel = this.foodLevel + 5
    //hungerbar_txbox.value = this.foodLevel;
  }//,
  // playUp: function() {
  //   this.playLevel = this.playLevel + 1
  // },
  // sleepUp: function() {
  //   this.sleepLevel = this.sleepLevel + 1
  // }
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 4; i++)
  					//get char	//round the number//0 to 1 * 64
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  random_gen_code = text;
}



tamagotchi.initialize("apple");
 //set a timer which is the interaction 


















