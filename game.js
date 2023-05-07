const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){

    let width = window.innerWidth; //1000px
    let height = window.innerHeight; //700px

    let canvaZise;

    if(width > height){
        canvaZise = height * 0.8;
    } else {
        canvaZise = width * 0.8;
    }

    canvas.setAttribute("width", canvaZise)
    canvas.setAttribute("height", canvaZise)

    const elementsSize = canvaZise / 10;

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize, elementsSize * i)
    }

    //game.fillRect(0,0,0,0);
    //game.clearRect(0,0,0,0);

    //game.font = "25px Verdana";
    //game.fillStyle = "purple";
    //game.textAlign = "left";
    //game.fillText('Platzi', 25, 25);
};
