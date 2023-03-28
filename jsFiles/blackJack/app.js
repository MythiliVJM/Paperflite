let firstCard=1;
let secondCard=10;
let cards=[firstCard,secondCard];
let sum=firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true
let message=" "
let messageEl=document.getElementById("message-el");
// let Btn = document.getElementById("btn")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
console.log(cardsEl);

function startGame(){
    renderGame();
}

function renderGame() {
    cardsEl.textContent="Cards: "+cards[0]+" "+cards[1];
    sumEl.textContent="Sum: " +sum;
    
    if(sum<=20){
        message="Do you wnat to draw a new card😊😊?";
    }
    else if(sum===21){
       message=" you've got balckjack🥳🥳!!";
       hasBlackJack=true;
    }
    else{
        message="you are lost😥😥";
        isAlive=false;
    }

messageEl.textContent=message

}
function newCard(){
    let card=10;
    sum+=card;
    renderGame();
}


