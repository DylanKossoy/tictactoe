let allButtons = getButtons();
let playerGoBottomContainer = document.querySelector('.player-go1');
let playerGoWinContainer = document.querySelector('.player-go2');
const winContainer = document.querySelector('.win-container');
const bottomContainer = document.querySelector('.bottom-container');

const game = new TTT(allButtons, playerGoBottomContainer, playerGoWinContainer, winContainer, bottomContainer);

startGame();

function startGame() {


    game.update();

}






function getButtons() {
    let allButtons = [];
    for(let i = 1; i <= 9; i++) {
        const button = document.getElementById(`button${i}`);
        allButtons.push(button);
    }
    return allButtons;
}