class TTT {
    constructor(spaces = [], playerGoBottomContainer, playerGoWinContainer, winContainer, bottomContainer) {
        this.spaces = spaces;
        this.winContainer = winContainer;
        this.playerGoBottomContainer = playerGoBottomContainer;
        this.playerGoWinContainer = playerGoWinContainer;
        this.bottomContainer = bottomContainer;
        this.playerTurn = 1;
        this.score = 0;
        

    }


    switchPlayer() {
        this.playerTurn = this.playerTurn == 1 ? 2 : 1;
        this.playerColor = this.playerColor == "blue" ? "red" : "blue"; 
        this.playerGoBottomContainer.innerText = this.playerColor; 
        
    }

    createNumberArray() {
        let numArray = [];
        let space = null;
        for(let i = 0; i < this.spaces.length; i++) {

            try {
                space = this.spaces[i].textContent.trim();

                switch(space) {
                    case 'X':
                        numArray.push(1);
                        break;
                    case 'O':
                        numArray.push(2);
                        break;
                    default:
                        numArray.push(0);
                        break;
                }
            } catch (e) {
                numArray.push(0);
                break;
            }
        }


        return numArray;


    }


    
    update() {
        this.eventListener();

    }


    checkWin() {
        //this currentarray
        let o = this.createNumberArray();
        //player turn

        let pt = this.playerTurn;
        let win = false;
        
        
        if(o[0] === pt && o[1] === pt && o[2] === pt) {
            win = true;
        }
        else if(o[3] === pt && o[4] === pt && o[5] === pt) {
            win = true;
        }
        else if(o[6] === pt && o[7] === pt && o[8] === pt) {
            win = true;
        }
        else if(o[0] === pt && o[3] === pt && o[6] === pt) {
            win = true;
        }
        else if(o[1] === pt && o[4] === pt && o[7] === pt) {
            win = true;
        }
        else if(o[2] === pt && o[5] === pt && o[8] === pt) {
            win = true;
        }
        else if(o[0] === pt && o[4] === pt && o[8] === pt) {
            win = true;
        }
        else if(o[2] === pt && o[4] === pt && o[6] === pt) {
            win = true;
        } else {
            return;
        }

        if(win) {
            this.bottomContainer.style.display = "none";
            this.winContainer.style.display = "flex";
            let player = this.playerTurn == 1 ? 'X' : 'O';
            this.playerGoWinContainer.innerText = player;

            
        }
        
    }


    eventListener() {
        addEventListener('mousedown', (evt) => {
            const buttonClicked = evt.target;
            

            if(buttonClicked.textContent == '') {
                if(this.playerTurn == 1) {
                    buttonClicked.innerText = 'X';
                    buttonClicked.classList.add('x_space');
                    this.checkWin();
                    
                } else if(this.playerTurn == 2) {
                    buttonClicked.innerText = 'O';
                    buttonClicked.classList.add('o_space');
                    this.checkWin()
                    
                }
            
                this.switchPlayer();

            } else {
                return;
            }
            
        })
    }



}