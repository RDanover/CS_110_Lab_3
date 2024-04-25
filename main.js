var play_state = 0;//0 represents 2 player game 1 represents cpu game
var current_player = 0;//0 represents X, 1 represents O
var player_1_score = 0;
var player_2_score = 0;
var game_won = 0; //0 represents false, 1 represents true
var move_count = 0;
const board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1];

function play(tile_location) {
	var player_label = document.getElementById("display_player_display");
    var score_label = document.getElementById("display_score");
    var debug_label = document.getElementById("debug");
    debug_label.innerHTML = board_state;
    if(game_won==0&&move_count!=9){
        if(tile_location =='one'){
            var i = 0;
            if(board_state[i]==-1){
                var current_box = document.getElementById("onebox");
                if(current_player == 0){
                    board_state[i] = 0;
                    current_box.innerHTML = "X";
                    current_player = 1;
                    if(is_win_state()){
                        player_1_score ++;
                        alert("X has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "O";
                }
                else{
                    board_state[i] = 1;
                    current_box.innerHTML = "O";
                    current_player = 0;
                    if(is_win_state()){
                        player_2_score ++;
                        alert("O has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "X";
                }
            }
        }
        else if(tile_location =='two'){
            var i = 1;
            if(board_state[i]==-1){
                var current_box = document.getElementById("twobox");
                if(current_player == 0){
                    board_state[i] = 0;
                    current_box.innerHTML = "X";
                    current_player = 1;
                    if(is_win_state()){
                        player_1_score ++;
                        alert("X has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "O";
                }
                else{
                    board_state[i] = 1;
                    current_box.innerHTML = "O";
                    current_player = 0;
                    if(is_win_state()){
                        player_2_score ++;
                        alert("O has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "X";
                }
            }
        }
        else if(tile_location =='three'){
            var i = 2;
            if(board_state[i]==-1){
                var current_box = document.getElementById("threebox");
                if(current_player == 0){
                    board_state[i] = 0;
                    current_box.innerHTML = "X";
                    current_player = 1;
                    if(is_win_state()){
                        player_1_score ++;
                        alert("X has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "O";
                }
                else{
                    board_state[i] = 1;
                    current_box.innerHTML = "O";
                    current_player = 0;
                    if(is_win_state()){
                        player_2_score ++;
                        alert("O has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "X";
                }
            }
        }
        else if(tile_location =='four'){
            var i = 3;
            if(board_state[i]==-1){
                var current_box = document.getElementById("fourbox");
                if(current_player == 0){
                    board_state[i] = 0;
                    current_box.innerHTML = "X";
                    current_player = 1;
                    if(is_win_state()){
                        player_1_score ++;
                        alert("X has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "O";
                }
                else{
                    board_state[i] = 1;
                    current_box.innerHTML = "O";
                    current_player = 0;
                    if(is_win_state()){
                        player_2_score ++;
                        alert("O has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "X";
                }
            }
        }
        else if(tile_location =='five'){
            var i = 4;
            if(board_state[i]==-1){
                var current_box = document.getElementById("fivebox");
                if(current_player == 0){
                    board_state[i] = 0;
                    current_box.innerHTML = "X";
                    current_player = 1;
                    if(is_win_state()){
                        player_1_score ++;
                        alert("X has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "O";
                }
                else{
                    board_state[i] = 1;
                    current_box.innerHTML = "O";
                    current_player = 0;
                    if(is_win_state()){
                        player_2_score ++;
                        alert("O has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "X";
                }
            }
        }
        else if(tile_location =='six'){
            var i = 5;
            if(board_state[i]==-1){
                var current_box = document.getElementById("sixbox");
                if(current_player == 0){
                    board_state[i] = 0;
                    current_box.innerHTML = "X";
                    current_player = 1;
                    if(is_win_state()){
                        player_1_score ++;
                        alert("X has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "O";
                }
                else{
                    board_state[i] = 1;
                    current_box.innerHTML = "O";
                    current_player = 0;
                    if(is_win_state()){
                        player_2_score ++;
                        alert("O has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "X";
                }
            }
        }
        else if(tile_location =='seven'){
            var i = 6;
            if(board_state[i]==-1){
                var current_box = document.getElementById("sevenbox");
                if(current_player == 0){
                    board_state[i] = 0;
                    current_box.innerHTML = "X";
                    current_player = 1;
                    if(is_win_state()){
                        player_1_score ++;
                        alert("X has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "O";
                }
                else{
                    board_state[i] = 1;
                    current_box.innerHTML = "O";
                    current_player = 0;
                    if(is_win_state()){
                        player_2_score ++;
                        alert("O has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "X";
                }
            }
        }
        else if(tile_location =='eight'){
            var i = 7;
            if(board_state[i]==-1){
                var current_box = document.getElementById("eightbox");
                if(current_player == 0){
                    board_state[i] = 0;
                    current_box.innerHTML = "X";
                    current_player = 1;
                    if(is_win_state()){
                        player_1_score ++;
                        alert("X has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "O";
                }
                else{
                    board_state[i] = 1;
                    current_box.innerHTML = "O";
                    current_player = 0;
                    if(is_win_state()){
                        player_2_score ++;
                        alert("O has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "X";
                }
            }
        }
        else if(tile_location =='nine'){
            var i = 8;
            if(board_state[i]==-1){
                var current_box = document.getElementById("ninebox");
                if(current_player == 0){
                    board_state[i] = 0;
                    current_box.innerHTML = "X";
                    current_player = 1;
                    if(is_win_state()){
                        player_1_score ++;
                        alert("X has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "O";
                }
                else{
                    board_state[i] = 1;
                    current_box.innerHTML = "O";
                    current_player = 0;
                    if(is_win_state()){
                        player_2_score ++;
                        alert("O has won");
                        game_won = 1;
                    }
                    player_label.innerHTML = "X";
                }
            }
        }
        score_label.innerHTML= "Scores: X:"+player_1_score+" O:"+player_2_score;
        move_count ++;
        if(move_count==9 && game_won==0){
            alert("TIE!");
        }
        if(play_state==1&&current_player==1&&game_won==0&&move_count!=9){
            play(get_cpu_move());
        }
        debug_label.innerHTML = board_state;
    }
    
}

function reset(){
    move_count = 0;
    var player_label = document.getElementById("display_player_display");
    var score_label = document.getElementById("display_score");
    player_label.innerHTML= "X";
    score_label.innerHTML= "Scores: X:0 O:0";
    player_1_score = 0;
    player_2_score = 0;
    reset_board();
    game_won = 0;
    play_state = 0;
    current_player = 0;
}

function new_game_cpu(){
    var player_label = document.getElementById("display_player_display");
    move_count = 0;
    game_won = 0;
    reset_board();
    play_state = 1;
    current_player = 0;
    player_label.innerHTML= "X";
}

function new_game_player(){
    var player_label = document.getElementById("display_player_display");
    move_count = 0;
    game_won = 0;
    reset_board();
    play_state = 0;
    current_player = 0;
    player_label.innerHTML= "X";
}

function is_win_state(){
    if(board_state[0]!=-1 && board_state[1]!=-1 && board_state[2]!=-1 && board_state[0]==board_state[1] && board_state[0]==board_state[2]){//top row
        return true;
    }
    else if (board_state[3]!=-1 && board_state[4]!=-1 && board_state[5]!=-1 && board_state[3]==board_state[4] && board_state[3]==board_state[5]){//middle row
        return true
    }
    else if (board_state[6]!=-1 && board_state[7]!=-1 && board_state[8]!=-1 && board_state[6]==board_state[7] && board_state[6]==board_state[8]){//bottom row
        
        return true
    }
    else if (board_state[0]!=-1 && board_state[3]!=-1 && board_state[6]!=-1 && board_state[0]==board_state[3] && board_state[0]==board_state[6]){//first column
        
        return true
    }
    else if (board_state[1]!=-1 && board_state[4]!=-1 && board_state[7]!=-1 && board_state[1]==board_state[4] && board_state[1]==board_state[7]){//second column
        
        return true
    }
    else if (board_state[2]!=-1 && board_state[5]!=-1 && board_state[8]!=-1 && board_state[2]==board_state[5] && board_state[2]==board_state[8]){//third column
        
        return true
    }
    else if (board_state[0]!=-1 && board_state[4]!=-1 && board_state[8]!=-1 && board_state[0]==board_state[4] && board_state[0]==board_state[8]){//l->r diagonal
        
        return true
    }
    else if (board_state[2]!=-1 && board_state[4]!=-1 && board_state[6]!=-1 && board_state[2]==board_state[4] && board_state[2]==board_state[6]){//r->l diagonal
        
        return true
    }
    return false;
}

function get_cpu_move(){
    var i = Math.floor(Math.random()*9);
    while(board_state[i]!=-1&&move_count!=9){
        i = Math.floor(Math.random()*9);
    }
    if(i==0){
        return'one';
    }
    else if(i==1){
        return 'two';
    }
    else if(i==2){
        return 'three';
    }
    else if(i==3){
        return 'four';
    }
    else if(i==4){
        return 'five';
    }
    else if(i==5){
        return 'six';
    }
    else if(i==6){
        return 'seven';
    }
    else if(i==7){
        return 'eight';
    }
    else if(i==8){
        return 'nine';
    }
}

function reset_board(){
    var current_box = document.getElementById("onebox");
    current_box.innerHTML = "";
    current_box = document.getElementById("twobox");
    current_box.innerHTML = "";
    current_box = document.getElementById("threebox");
    current_box.innerHTML = "";
    current_box = document.getElementById("fourbox");
    current_box.innerHTML = "";
    current_box = document.getElementById("fivebox");
    current_box.innerHTML = "";
    current_box = document.getElementById("sixbox");
    current_box.innerHTML = "";
    current_box = document.getElementById("sevenbox");
    current_box.innerHTML = "";
    current_box = document.getElementById("eightbox");
    current_box.innerHTML = "";
    current_box = document.getElementById("ninebox");
    current_box.innerHTML = "";
    for(var i=0;i<board_state.length;i++){
        board_state[i] = -1;
    }
    return;
}