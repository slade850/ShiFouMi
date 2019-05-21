var userInput = '';
var repIa = '';
var pl1 = document.getElementById('playerChoice');
var plIa = document.getElementById('iaChoice');
var x = 0;
var pointA = 0;
var pointB = 0;
var speudo = prompt("Entre Ton Pseudo.");
document.getElementById("name").innerHTML = speudo;
var modal = document.getElementsByClassName("container-modal")[0];


function recupUser(elem){
    switch(elem){
        case 1:
        userInput = 'pierre';
        pl1.className = "far fa-hand-rock";
        break;
        case 2:
        userInput = 'papier';
        pl1.className = "far fa-hand-paper";
        break;
        case 3:
        userInput = 'ciseau';
        pl1.className = "far fa-hand-scissors";
        break;
    };
    x = Math.floor(Math.random()*3);
    recupIa(x);
}

function recupIa (x){
    switch(x){
        case 0:
        repIa = 'pierre';
        plIa.className = "far fa-hand-rock";
        break;
        case 1:
        repIa = 'papier';
        plIa.className = "far fa-hand-paper";
        break;
        case 2:
        repIa = 'ciseau';
        plIa.className = "far fa-hand-scissors";
        break;
    } 
    res();
    openModal();
}
function res(){
if(userInput == repIa) {
    document.getElementById("resulta").innerHTML = 'Egalité';
    document.getElementById("resulta").style.color = 'black';
} else if ((userInput == 'pierre' && repIa == 'papier') || (userInput == 'papier' && repIa == 'ciseau') || (userInput == 'ciseau' && repIa == 'pierre')){
    document.getElementById("resulta").innerHTML = 'Tu as Perdu';
    document.getElementById("resulta").style.color = 'red';
    pointB ++;
    document.getElementById("pointI").innerHTML = pointB;
} else {
    document.getElementById("resulta").innerHTML = 'Tu as Gagné';
    document.getElementById("resulta").style.color = 'green';
    pointA ++;
    document.getElementById("pointP").innerHTML = pointA;
}
}

function openModal() {
    if(pointA == 10 && pointA > pointB){
        document.getElementById("text-modal").innerHTML = 'YOU WIN!';
        document.getElementById("text-modal").style.color = 'green';
        modal.style.display = "block";   
    } else if(pointB == 10 && pointB > pointA){
    document.getElementById("text-modal").innerHTML = 'YOU LOOSE!';
    document.getElementById("text-modal").style.color = 'red';
    modal.style.display = "block";
    }
}
function closeModal() {
    modal.style.display = "none";
    location.reload();
}
window.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal();

}})