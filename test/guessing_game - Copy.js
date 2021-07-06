let col = [1, 2, 3 , 4 , 5 , 6 , 7, 8];
let gridValue = 0;
let row = ["A", "B", "C", "D", "E", "F", "G", "H"];
let row_lbl;
let col_lbl;

let pink_stone;
let pink_shack; 
let orange_stone;
let orange_shack; 

let colorArray = [
    "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", 
    "purple", "purple", "purple", "purple", "purple", "purple", "purple", "purple",
    "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey",
    "green", "green", "green", "green", "green", "green", "green", "green",
    "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua", "aqua",
    "yellow", "yellow", "yellow", "yellow", "purple", "purple", "purple", "purple",
    "grey", "grey", "grey", "grey", "green", "green", "green", "green",
    "aqua", "aqua", "aqua", "aqua",  "yellow", "grey", "green", "aqua", "purple"];
let animalArray = [
"wolf", "wolf", "wolf", "wolf", "wolf", "wolf", "wolf", "wolf", 
"wolf", "wolf", "wolf", "wolf", "wolf", "wolf", "wolf", "wolf",
"wolf", "wolf", "wolf", "wolf", "wolf", "wolf", "bear", "bear",
"bear", "bear", "bear", "bear", "bear", "bear", "bear", "bear",
"bear", "bear", "bear", "bear", "bear", "bear", "bear", "bear",
"bear", "bear", "bear", "cougar", "cougar", "cougar", "cougar", "cougar",
"cougar", "cougar", "cougar", "cougar", "cougar", "cougar", "cougar", "cougar",
"cougar", "cougar", "cougar", "cougar",  "cougar", "cougar", "cougar", "cougar", "wolf"];

let answer;
answer = getRndInteger(1, 64);
let clue1;
let clue2;
let clue3;
let clue4;
let clue5; 
let clue3_fake;
let clue4_fake;
let clue3_order;
let clue4_order;
let clue1_display;
let clue2_display;
let clue3_display;
let clue4_display;
let clue5_display;
let clues_array = [];
let i = 0;
let activeplayer = "Player 1"; 
let game_win = false; 

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

function ClueGenerator(answer){
    clue1 = $('.grid[name=' + answer + ']').attr('color');
    console.log(typeof answer, answer);
    switch(clue1) {
        case "yellow":
            clue1 = "desert";
          break;
        case "purple":
            clue1 = "swamp";
          break;
          case "aqua":
            clue1 = "water";
          break;
        case "grey":
            clue1 = "mountain";
          break;
          case "green":
            clue1 = "forest";
          break;
        default:
      }
    
    clue2 = $('.grid[name=' + answer + ']').attr('land');
    switch(answer){
        case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8:
            clue3 = row[0];
            clue3_fake = getRndInteger(0, 7);
            while (clue3_fake == 0) {
                clue3_fake = getRndInteger(0, 7);
            }
            clue3_fake = row[clue3_fake];
            break;
        case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16:
            clue3 = row[1];
            clue3_fake = getRndInteger(0, 7);
            while (clue3_fake == 1) {
                clue3_fake = getRndInteger(0, 7);
            }
            clue3_fake = row[clue3_fake];
            break;        
        case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24:
            clue3 = row[2];
            clue3_fake = getRndInteger(0, 7);
            while (clue3_fake == 2) {
                clue3_fake = getRndInteger(0, 7);
            }
            clue3_fake = row[clue3_fake];
            break;      
        case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32:
            clue3 = row[3];
            clue3_fake = getRndInteger(0, 7);
            while (clue3_fake == 3) {
                clue3_fake = getRndInteger(0, 7);
            }
            clue3_fake = row[clue3_fake];
            break;  
        case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40:
            clue3 = row[4];
            clue3_fake = getRndInteger(0, 7);
            while (clue3_fake == 4) {
                clue3_fake = getRndInteger(0, 7);
            }
            clue3_fake = row[clue3_fake];
            break;   
        case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48:
            clue3 = row[5];
            clue3_fake = getRndInteger(0, 7);
            while (clue3_fake == 5) {
                clue3_fake = getRndInteger(0, 7);
            }
            clue3_fake = row[clue3_fake];
            break;         
        case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56:
            clue3 = row[6];
            clue3_fake = getRndInteger(0, 7);
            while (clue3_fake == 6) {
                clue3_fake = getRndInteger(0, 7);
            }
            clue3_fake = row[clue3_fake];
            break; 
        case 57: case 58: case 59: case 60: case 61: case 62: case 63: case 64:
            clue3 = row[6];
            clue3_fake = getRndInteger(0, 7);
            while (clue3_fake == 7) {
                clue3_fake = getRndInteger(0, 7);
            }
            clue3_fake = row[clue3_fake];
            break;    
        default:                                 
    }

    switch(answer){
        case 1: case 9: case 17: case 25: case 33: case 41: case 49: case 57:
            clue4 = col[0];
            clue4_fake = getRndInteger(0, 7);
            while (clue4_fake == 0) {
                clue4_fake = getRndInteger(0, 7);
            }
            clue4_fake = col[clue4_fake];
            break;
        case 2: case 10: case 18: case 26: case 34: case 42: case 50: case 58:
            clue4 = col[1];
            clue4_fake = getRndInteger(0, 7);
            while (clue4_fake == 1) {
                clue4_fake = getRndInteger(0, 7);
            }
            clue4_fake = col[clue4_fake];
            break;        
        case 3: case 11: case 19: case 27: case 35: case 43: case 51: case 59:
            clue4 = col[2];
            clue4_fake = getRndInteger(0, 7);
            while (clue4_fake == 2) {
                clue4_fake = getRndInteger(0, 7);
            }
            clue4_fake = col[clue4_fake];
            break;      
        case 4: case 12: case 20: case 28: case 36: case 44: case 52: case 60:
            clue4 = col[3];
            clue4_fake = getRndInteger(0, 7);
            while (clue4_fake == 3) {
                clue4_fake = getRndInteger(0, 7);
            }
            clue4_fake = col[clue4_fake];
            break;  
        case 5: case 13: case 21: case 29: case 37: case 45: case 53: case 61:
            clue4 = col[4];
            clue4_fake = getRndInteger(0, 7);
            while (clue4_fake == 4) {
                clue4_fake = getRndInteger(0, 7);
            }
            clue4_fake = col[clue4_fake];
            break;   
        case 6: case 14: case 22: case 30: case 38: case 46: case 54: case 62:
            clue4 = col[5];
            clue4_fake = getRndInteger(0, 7);
            while (clue4_fake == 5) {
                clue4_fake = getRndInteger(0, 7);
            }
            clue4_fake = col[clue4_fake];
            break;         
        case 7: case 15: case 23: case 31: case 39: case 47: case 55: case 63:
            clue4 = col[6];
            clue4_fake = getRndInteger(0, 7);
            while (clue4_fake == 6) {
                clue4_fake = getRndInteger(0, 7);
            }
            clue4_fake = col[clue4_fake];
            break; 
        case 8: case 16: case 24: case 32: case 40: case 48: case 56: case 64:
            clue4 = col[7];
            clue4_fake = getRndInteger(0, 7);
            while (clue4_fake == 7) {
                clue4_fake = getRndInteger(0, 7);
            }
            clue4_fake = col[clue4_fake];
            break;      
        default:                                     
    }

    clue3_order = getRndInteger(1, 2);
    clue4_order = getRndInteger(1, 2);
    clue1_display = "Is on a " + clue1 + " tile.";
    clue2_display = "Is in " + clue2 + " territory.";
    if(clue4_order == 1 ){
        clue3_display = "It is on row " + clue3 + " or " + clue3_fake + ".";
    } else {
        clue3_display = "It is on row " + clue3_fake + " or " + clue3 + ".";
    }
    
    if(clue4_order == 1){
        clue4_display = "It is on column " + clue4 + " or " + clue4_fake + ".";
    } else {
        clue4_display = "It is on column " + clue4_fake + " or " + clue4 + ".";
    }
    console.log(clue1, clue2, clue3, clue4);
}

function toggleClue(toggle, state){
    switch(toggle) {
        case "clue1":
            if(state == "visible"){
                $('.displayClue[name=clue1]').css("visibility", "hidden");
                $('.clueToggle[name=clue1]').attr('state', 'hidden');
            } else {
                $('.displayClue[name=clue1]').css("visibility", "visible");
                $('.clueToggle[name=clue1]').attr('state', 'visible');
            }
          break;
        case "clue2":
            if(state == "visible"){
                $('.displayClue[name=clue2]').css("visibility", "hidden");
                $('.clueToggle[name=clue2]').attr('state', 'hidden');
            } else {
                $('.displayClue[name=clue2]').css("visibility", "visible");
                $('.clueToggle[name=clue2]').attr('state', 'visible');
            }
          break;
          case "clue3":
            if(state == "visible"){
                $('.displayClue[name=clue3]').css("visibility", "hidden");
                $('.clueToggle[name=clue3]').attr('state', 'hidden');
            } else {
                $('.displayClue[name=clue3]').css("visibility", "visible");
                $('.clueToggle[name=clue3]').attr('state', 'visible');
            }
          break;
        case "clue4":
            if(state == "visible"){
                $('.displayClue[name=clue4]').css("visibility", "hidden");
                $('.clueToggle[name=clue4]').attr('state', 'hidden');
            } else {
                $('.displayClue[name=clue4]').css("visibility", "visible");
                $('.clueToggle[name=clue4]').attr('state', 'visible');
            }
          break;
        default:
      }
}

function displayPlayerInfo(){
    clues_array = [clue1_display, clue2_display, clue3_display, clue4_display];
    shuffle(clues_array);
    $("#clue").append("<button class = clueToggle state=hidden name = clue1>Player 1's Clue</button>" + 
    "<span class = displayClue name = clue1>" + " " + clues_array[0] + " " + "</span>" + 
    "<button class = clueToggle state=hidden name = clue2>Player 2's Clue</button>" +
    "<span class = displayClue name = clue2>" + " " + clues_array[1] + " " + "</span>" + 
    "<button class = clueToggle state=hidden name = clue3>Player 3's Clue</button>" +
    "<span class = displayClue name = clue3>" + " " + clues_array[2] + " " + "</span>" +
    "<button class = clueToggle state=hidden name = clue4>Player 4's Clue</button>" +
    "<span class = displayClue name = clue4>" + " " + clues_array[3] + " " + "</span>" 
    );
    // $("#clue").append("<div class = displayClue name = clue1>" + clues_array[0] + "</div><br />" + "<button class = clueToggle state=hidden name = clue1>Player 1's Clue</button><br /><br />");
    // $("#clue").append("<div class = displayClue name = clue2>" + clues_array[1] + "</div><br />" + "<button class = clueToggle state=hidden name = clue2>Player 2's Clue</button><br /><br />");
    // $("#clue").append("<div class = displayClue name = clue3>" + clues_array[2] + "</div><br />" + "<button class = clueToggle state=hidden name = clue3>Player 3's Clue</button><br /><br />");
    //$("#clue").append("<div class = displayClue name = clue4>" + clues_array[3] + "</div><br />" + "<button class = clueToggle state=hidden name = clue4>Player 4's Clue</button><br /><br />");
}

function turnOrder(){
    switch(activeplayer){
        case "Player 1":
            activeplayer = "Player 2";
            break;
        case "Player 2":
            activeplayer = "Player 3";
                break;
        case "Player 3":
            activeplayer = "Player 4";
            break;
        case "Player 4":
            activeplayer = "Player 1";
            break;                
    }
    $("#player_order").text("It's your turn " + activeplayer);
}

function checkWin(num){
    if(num == answer){
        $("#guess_result").text("U WINNER! Congrats, " + activeplayer);
    } else{
        $("#guess_result").text("Wrong!");
        turnOrder();
        $('.grid[name=' + num + ']').css("color", "red");
    }
}

function createGrid(x) {
    shuffle(colorArray);
    shuffle(animalArray);
    for (var rows = 0; rows < x; rows++) {
        row_lbl = row[rows];
        for (var columns = 0; columns < x; columns++) {
            gridValue++;
            col_lbl = col[columns]; 
            $("#container").append("<div class='grid' color= " + colorArray[gridValue] + " land= " + animalArray[gridValue] + " name= " + gridValue + ">" + row_lbl + col_lbl + " (" + animalArray[gridValue] + ")" + "</div>");
            $('.grid[name=' + gridValue + ']').css("background-color", colorArray[gridValue]);
        };
    };
    ClueGenerator(answer);
    $(".grid").width(960/x);
    $(".grid").height(960/x);

};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    clearGrid();
    createGrid(8);
};

// create a 16x16 grid when the page loads
$(document).ready(function() {
    createGrid(8);
    displayPlayerInfo();
    $("#guess_result").text("Your guess result will be here.");
    $("#player_order").text("It's your turn " + activeplayer);
    $(".grid").click(function() {
        checkWin($(this).attr('name'));
        if(game_win == true){
            $(".grid").prop("disabled",true);
        }
        // console.log($(this).attr('name'));
        });    
    $(".newGrid").click(function() {
        refreshGrid();
    });
    $(".clueToggle").click(function() {
        toggleClue($(this).attr('name'), $(this).attr('state'));
    });
});
