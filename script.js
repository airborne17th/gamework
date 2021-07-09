let current_space;
let prev_space;
let last_space;
let activeplayer = {player_value: 0, space: 1};
let lastplayer = {player_value: 0, space: 0};
let startpoint = 1; 
let board_length = 52;
let innstops = [15, 25, 39, 52];
let current_inn = innstops[0];
let numPlayer = 3; 
let PlayerStartArray = [...Array(numPlayer).keys()];
let spaceTypeArray = ["Inn", "Souvenir", "Statue", "Visitor", "Field", "Cafe", "Mountain", "Mora", "Souvenir", "Statue", "Visitor", "Lake", "Mountain", "Cafe", "Inn", "Lake", "Statue", "Mora", "Field", "Mountain", "Visitor", "Statue", "Cafe", "Mountain", "Lake", "Souvenir", "Mora", "Inn", "Field", "Souvenir", "Visitor", "Mora", "Mountain", "Cafe", "Lake", "Field", "Statue", "Mora", "Visitor", "Lake", "Souvenir", "Inn", "Cafe", "Statue", "Visitor", "Souvenir", "Lake", "Mora", "Lake", "Visitor", "Mountain", "Field", "Lake", "Souvenir", "Inn"];
let occupiedArray = new Array(52).fill(false);
let initialTurnOrderArray = shuffle(PlayerStartArray);
let charSelectionArray;
let game_end = false; 
let players_at_inn = false;
let firstTurn = true;
let characterSelection = true;
let player1 = {name:"", img: "", point:0, mora:0,souvenir:[],Cafe_count:0,travelers:[], meals:[],field_art:0,mountain_art:0,lake_art:0, player_value:0,space:1, active:true};
let player2 = {name:"", img: "", point:0, mora:0,souvenir:[],Cafe_count:0,travelers:[], meals:[],field_art:0,mountain_art:0,lake_art:0, player_value:1,space:1, active:true};
let player3 = {name:"", img: "", point:0, mora:0,souvenir:[],Cafe_count:0,travelers:[], meals:[],field_art:0,mountain_art:0,lake_art:0, player_value:2,space:1, active:true};
let player4 = {name:"", img: "", point:0, mora:0,souvenir:[],Cafe_count:0,travelers:[], meals:[],field_art:0,mountain_art:0,lake_art:0, player_value:3,space:1, active:true};
let player5 = {name:"", img: "", point:0, mora:0,souvenir:[],Cafe_count:0,travelers:[], meals:[],field_art:0,mountain_art:0,lake_art:0, player_value:4,space:1, active:true};
// let playersArray = [player1, player2, player3];
let mealArray = [
  {
    "name": "purple",
    "type": "minivan",
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "capacity": 5
  },
]

let charArray = [
  {
    "name": "Albedo",
    "num": 2,
    "img": "./img/thumb/Character_Albedo_Thumb.png",
    "mora": 5,
    "chosen": false
  },
  {
    "name": "Mona",
    "num": 1,
    "img": "./img/thumb/Character_Mona_Thumb.png",
    "mora": 5,
    "chosen": false
  },
  {
    "name": "Diluc",
    "num": 4,
    "img": "./img/thumb/Character_Diluc_Thumb.png",
    "mora": 6,
    "chosen": false
  },
  {
    "name": "Klee",
    "num": 3,
    "img": "./img/thumb/Character_Klee_Thumb.png",
    "mora": 2,
    "chosen": false
  },
  {
    "name": "Barbara",
    "num": 5,
    "img": "./img/thumb/Character_Barbara_Thumb.png",
    "mora": 8,
    "chosen": false
  },
  {
    "name": "Aether",
    "num": 6,
    "img": "./img/thumb/Character_Barbara_Thumb.png",
    "mora": 4,
    "chosen": false
  }
]


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function checkSpace(num){
    let potentialSpace = parseInt(num);
    console.log(potentialSpace);
    let currentPlayerSpace = activeplayer["space"]; 
    let validChoice = true; 
    switch(activeplayer["player_value"]){
      case 0:
        currentPlayerSpace = player1["space"];
        break;
      case 1:
        currentPlayerSpace = player2["space"];
        break;
      case 2:
        currentPlayerSpace = player3["space"];
        break;
      case 3:
        currentPlayerSpace = player4["space"];
        break;
      case 4:
        currentPlayerSpace = player5["space"];
        break;  
      }

      // Check if the space is occupied or an Inn
      if (potentialSpace != current_inn){
        if (occupiedArray[potentialSpace] == true){
          document.getElementById("player_error").innerHTML = "Occupied!";
          console.log("Occupied!");
          validChoice = false;
        }
      }
      // Check if the space is above current position
      if(potentialSpace <= currentPlayerSpace){
        document.getElementById("player_error").innerHTML = "Cannot be chosen!";
        console.log("Cannot be chosen!");
        validChoice = false;
      }
      // check if the space is above what is currently allowed based on Inn
      if(potentialSpace > current_inn){
        document.getElementById("player_error").innerHTML = "Too Far Ahead!";
        console.log("Too Far Ahead!");
        validChoice = false;
      }
      // check if the space is the Inn space
      if(potentialSpace == current_inn){
        console.log("You are at the Inn, rest easy!");
        PlayerStartArray.push(activeplayer["player_value"]);
        console.log(PlayerStartArray);
        switch(activeplayer["player_value"]){
          case 0:
            player1["active"] = false;
            break;
          case 1:
            player2["active"] = false;
            break;
          case 2:
            player3["active"] = false;
            break;
          case 3:
            player4["active"] = false;
            break;
          case 4:
            player5["active"] = false;
            break;  
          }
      }
      if(validChoice == true){
        switch(activeplayer["player_value"]){
          case 0:
            player1["space"] = potentialSpace;
            document.getElementById(potentialSpace).style.backgroundColor = "cyan";
            break;
          case 1:
            player2["space"] = potentialSpace;
            // $('.board[id=potentialSpace]').css("backgroundColor", "red");
            document.getElementById(potentialSpace).style.backgroundColor = "red";
            break;
          case 2:
            player3["space"] = potentialSpace;
            document.getElementById(potentialSpace).style.backgroundColor = "green";
            break;
          case 3:
            player4["space"] = potentialSpace;
            document.getElementById(potentialSpace).style.backgroundColor = "purple";
            break;
          case 4:
            player5["space"] = potentialSpace;
            document.getElementById(potentialSpace).style.backgroundColor = "pink";
            break;  
          default:
            // code block
          }
          document.getElementById("player_error").innerHTML = "";
          occupiedArray[potentialSpace] = true;
          
          occupiedArray[currentPlayerSpace] = false;
          console.log(currentPlayerSpace);
          document.getElementById(currentPlayerSpace).style.backgroundColor = "white";

          checkSpaceType(potentialSpace);
      }

      if(player1["space"] == current_inn && player2["space"] == current_inn && player3["space"] == current_inn){
        newInnEvent();
      }
}

function newInnEvent(){
  switch(current_inn){
    case innstops[0]:
      current_inn = innstops[1];
      break;
    case innstops[1]:
      current_inn = innstops[2];
      break;
    case innstops[2]:
      current_inn = innstops[3];
      break;
    case innstops[3]:
      console.log("End of Game!");
      break;
    default:
      // code block
    }
  firstTurn = true; 
  return current_inn; 
}

function checkSpaceType(event){
console.log(event);
switch(event){
  case "Inn":
    // innMealEvent();
    break;
  case "Souvenir":
    // souvenirEvent();
    break;
  case "Visitor":
    // visitorEvent();
    break;
  case "Cafe":
    // cafeEvent();
    break;
  case "Statue":
    // statueEvent();
    break;  
  case "Mora":
    // moraEvent();
    break;
  case "Lake":
    // lakeEvent();
    break;
  case "Field":
    // fieldEvent();
    break;
  case "Mountain":
    // mountainEvent();
    break;   
  case "End":
    // EndGameEvent();
    break
  default:
    // code block 
  }
}   

function playerCountSelection(){

}

function initializeCharSelection(){
  charSelectionArray = shuffle(PlayerStartArray);
  activeplayer["player_value"] = charSelectionArray[0];
}

function initializeGameStart(){
  if(charSelectionArray.length == 0){
    characterSelection = false;
    // initialTurnOrderArray = shuffle(PlayerStartArray);
    activeplayer["player_value"] = initialTurnOrderArray[0];
  }
  console.log(initialTurnOrderArray);
}    

function firstTurnOrder(){
  // console.log(initialTurnOrderArray);
  initialTurnOrderArray.shift();
  if(initialTurnOrderArray.length == 0){
    firstTurn = false;
    determineTurnOrder();
  } else{
    activeplayer["player_value"] = initialTurnOrderArray[0];
  }
}

function determineTurnOrder(){
  switch(activeplayer["player_value"]){
    case 0:
      activeplayer["space"] = player1["space"];
      break;
    case 1:
      activeplayer["space"] = player2["space"];
      break;
    case 2:
      activeplayer["space"] = player3["space"];
      break;
    case 3:
      activeplayer["space"] = player4["space"];
      break;
    case 4:
      activeplayer["space"] = player5["space"];
      break;  
  }
  console.log(activeplayer);
  let playSpace = [player1["space"], player2["space"], player3["space"]];
  let min = Math.min(...playSpace)
  if(activeplayer["space"] > min){
    switch(min) {
      case player1["space"]:
        activeplayer["player_value"] = player1["player_value"];
        break;
      case player2["space"]:
        activeplayer["player_value"] = player2["player_value"];
        break;
      case player3["space"]:
        activeplayer["player_value"] = player3["player_value"];
        break;
      case player4["space"]:
        activeplayer["player_value"] = player4["player_value"]; 
        break;
      case player5["space"]:
        activeplayer["player_value"] = player5["player_value"];
        break;  
      default:
        // code block
    }
  } 
}

function displayActivePlayer(activeplayer){
  let DP;
  switch(activeplayer["player_value"]) {
    case 0:
      DP = "Player 1";
      break;
    case 1:
      DP = "Player 2";
      break;
    case 2:
      DP = "Player 3";
      break;
    case 3:
      DP = "Player 4";
        break;
    case 4:
      DP = "Player 5";
        break;  
    default:
      // code block
  }
  $("#player_order_display").text("It's your turn " + DP);
}

function innMealEvent(){

}

function char_selection(id){
  let validChoice = true;
  let char; 
  switch(id) {
    case "Albedo":
      char = 0; 
      break;
    case "Mona":
      char = 1; 
      break;
    case "Diluc":
      char = 2; 
      break;
    case "Klee":
      char = 3; 
      break;
    case "Barbara":
      char = 4; 
      break;
    case "Aether":
      char = 5; 
      break;  
    default:
      // code block
    }
    if(charArray[char]["chosen"] == true){
      validChoice = false;
      alert("Character has been chosen!");
    }

  if(validChoice == true){
      charArray[char]["chosen"] = true;
      switch(activeplayer["player_value"]){
          case 0:
            player1["name"] = charArray[char]["name"];
            player1["img"] = charArray[char]["img"];
            player1["mora"] = charArray[char]["mora"];
            document.getElementById("P1P").src= player1["img"];
            break;
          case 1:
            player2["name"] = charArray[char]["name"];
            player2["img"] = charArray[char]["img"];
            player2["mora"] = charArray[char]["mora"];
            document.getElementById("P2P").src= player2["img"];
            break;
          case 2:
            player3["name"] = charArray[char]["name"];
            player3["img"] = charArray[char]["img"];
            player3["mora"] = charArray[char]["mora"];
            document.getElementById("P3P").src= player3["img"];
            break;
          case 3:
            player4["name"] = charArray[char]["name"];
            player4["img"] = charArray[char]["img"];
            player4["mora"] = charArray[char]["mora"];
            document.getElementById("P4P").src= player4["img"];
            break;
          case 4:
            player5["name"] = charArray[char]["name"];
            player5["img"] = charArray[char]["img"];
            player5["mora"] = charArray[char]["mora"];
            document.getElementById("P5P").src= player5["img"];
            break;  
          }
    charSelectionArray.shift();
    if(charSelectionArray.length == 0){

    } else{
      activeplayer["player_value"] = charSelectionArray[0];
      displayActivePlayer(activeplayer);
    }
  }
}

  $(document).ready(function() {
    // initializeGameStart(numPlayer);
    initializeCharSelection();
    displayActivePlayer(activeplayer);
    $(".char-card").click(function() {
      if(characterSelection == true){
        char_selection($(this).attr('id'));
        initializeGameStart();
      } 
    });
    $(".board").click(function() {
      if(characterSelection == true){

      } else{
        checkSpace($(this).attr('id'));
        if(firstTurn == true){
          firstTurnOrder();
        } else {
          determineTurnOrder();
        }
        checkSpaceType($(this).attr('type'));
        displayActivePlayer(activeplayer);
        }    
      });
});
