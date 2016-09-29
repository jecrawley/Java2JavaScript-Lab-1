" use strict ";

var display = document.getElementById("display");

function oneToTen (){
    var oneToTen = "";
    for (var i = 1; i < 11; i++ ) {
        oneToTen += i  + " ";
    }

    display.innerHTML = oneToTen;

}

function oddNumbers () {
    var oddNums = "";
    for (var i = 1; i < 20; i += 2) {
        oddNums += i + " ";
    }

    display.innerHTML = oddNums;

}

function squareNumbers () {

    var squareNums = "";
    for (var i = 1; i < 11; i++ ) {
        squareNums += Math.pow(i, 2) + " ";
    }

    display.innerHTML = squareNums;

}

function randomNumbers () {

    var randNums = "";
    for (var i = 0; i < 4; i++) {
        randNums += Math.floor((Math.random() * 100) + 1) + " ";
    }

    display.innerHTML = randNums;

}

function evenNumbers (nums) {
    var evenNums = "";
    for (var i = 2; i < nums; i += 2) {
        evenNums += i + " ";
    }

    display.innerHTML = evenNums;

}

function powersOfTwo (nums) {

    var powerNums = "";
    for (var i = 0; i <= nums; i++) {
        powerNums += Math.pow(2, i) + " ";
    }

    display.innerHTML = powerNums;

}

function areWeThereYet () {

}

function triangle () {

}

function tableSquare () {

}

function tableSquares () {

}
