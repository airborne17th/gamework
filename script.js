let current_space;
let prev_space;
let player1_space;
let player2_space;
let least_space;
let activeplayer; 

function checkSpace(num){
    num = parseInt(num);
    console.log(typeof num, num);
    }
  
  $(document).ready(function() {
    // $("#player_order").text("It's your turn " + activeplayer);
    $(".board").click(function() {
        checkSpace($(this).attr('id'));
        });    
});
