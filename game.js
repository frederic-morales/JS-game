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

    //Maps
    const map = maps[1];
    const mapRows = map.trim().split('\n');
    const mapRowsCols = mapRows.map(row => row.trim().split(''));
    console.log(map);


    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapRowsCols[row -1][col - 1]],
            elementsSize * col, elementsSize * row)            
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