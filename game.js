const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
let canvaZise;
let elementsSize;

window.addEventListener('load', startGame);
window.addEventListener('resize', startGame);

function startGame(){
    resizeCanvas();

    canvas.setAttribute("width", canvaZise)
    canvas.setAttribute("height", canvaZise)

    elementsSize = canvaZise / 10;

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    for (let x = 1.2; x <= 12; x++) {
        for (let y = 1; y <= 10; y++) {
            game.fillText(emojis['X'], elementsSize * x, elementsSize * y)            
        }
    }

    //game.fillRect(0,0,0,0);
    //game.clearRect(0,0,0,0);

    //game.font = "25px Verdana";
    //game.fillStyle = "purple";
    //game.textAlign = "left";
    //game.fillText('Platzi', 25, 25);
};

function resizeCanvas(){
    let width = window.innerWidth; //1000px
    let height = window.innerHeight; //700px

    if(width > height){
        canvaZise = height * 0.8;
    } else {
        canvaZise = width * 0.8;
    }
}