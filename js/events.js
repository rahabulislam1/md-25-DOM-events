function makeMeBlue() {
    document.body.style.backgroundColor = 'blue';
}

/////////handle Blue button click by setting function name
const yellowButton = document.getElementById('makeMeYellow');
yellowButton.onclick = makeYellow;
// ***** ekhane function direct call deua jabe na , dile auto call hye jabe
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
const unknowonBtn = document.getElementById('unknownDestination');
unknowonBtn.onclick = unknownFnc;
function unknownFnc() {
    document.body.style.backgroundColor = 'black';
}


/////////Handle event by calling anonymous function
const goldenRodBtn = document.getElementById('makeMeGoldenRod');
//jkhn direct function call dewa hoi tkhn function name na dileu hoi. function goldenRodFnc()
goldenRodBtn.onclick = function () {
    document.body.style.backgroundColor = 'goldenrod';
}


//Handle event by using addEvenListener 
const greenBtn = document.getElementById('makeMeGreen');
greenBtn.addEventListener('click', greenFnc);
function greenFnc() {
    document.body.style.backgroundColor = 'green';
}

//Handle Event by using addEventListener and anonymous function
const seaGreenBtn = document.getElementById('makeMeSeaGreen');
seaGreenBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'SeaGreen';
});


//Handle event by shortcut method
document.getElementById('makeMeLightBlue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});