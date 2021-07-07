let current_space;
let prev_space;
let player1_space = 0;
let player2_space = 0;
let player3_space = 0;
let player4_space = 0;
let player5_space = 0;
let least_space;
let activeplayer; 
let numPlayer = 3; 
let PlayerArray = [...Array(numPlayer).keys()];
let game_end = false; 
let capacityArray = [5, 2, 1, 1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 5, 1, 1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1, 5, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 5, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 2, 1, 5];
let occupiedArray = [];
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
  let currentPlayerSpace;
    num = parseInt(num);
    switch(activeplayer){
      case 0:
        currentPlayerSpace = num;
        break;
      case 1:
        currentPlayerSpace = num;
        break;
      case 2:
        currentPlayerSpace = num;
        break;
      case 3:
        currentPlayerSpace = num;
          break;
      case 4:
        currentPlayerSpace = num;
        break;  
      default:
        // code block
      }

    if (occupiedArray[num] >= capacityArray[num]){
      console.log("Occupied!");
    }
    if (num < currentPlayerSpace){
      console.log("Cannot be chosen!");
    }
    occupiedArray[num]++;
    switch(activeplayer){
      case 0:
        player1_space = num;
        break;
      case 1:
        player2_space = num;
        break;
      case 2:
        player3_space = num;
        break;
      case 3:
        player4_space = num;
          break;
      case 4:
        player5_space = num;
        break;  
      default:
        // code block
      }
      console.log("1: " + player1_space + " 2: " + player2_space + " 3: " + player3_space + " 4: " + player4_space + " 5: " + player5_space) 
    }

// function checkSpaceType(){}   
function playerCountSelection(count){
  activeplayer = count;
  $('.select_player_count').css("visibility", "hidden");
  console.log("Number of Players " + activeplayer);
  return activeplayer;
}

function initializePlayerCount(numPlayer){
  activeplayer = getRndInteger(0,numPlayer);
  console.log(activeplayer);
  return activeplayer;
}    

function displayActivePlayer(activeplayer){
  let DP;
  switch(activeplayer) {
    case 0:
      DP = "Player 1";
      break;
    case 1:
      DP = "Player 2";
      break;
    case 2:
      DP = "Player 2";
      break;
    case 3:
      DP = "Player 3";
        break;
    case 4:
      DP = "Player 4";
        break;  
    default:
      // code block
  }
  $("#player_order_display").text("It's your turn " + DP);
}

  $(document).ready(function() {
    initializePlayerCount(numPlayer);
    displayActivePlayer(activeplayer);
    $(".board").click(function() {
        checkSpace($(this).attr('id'));
        // checkActivePlayer(activeplayer);
        displayActivePlayer(activeplayer);
        });    
});
