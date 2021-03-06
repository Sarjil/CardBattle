import Cards from './cards';

class Game{
    constructor(){
        this.hp = 30;
        this.oppHP = 30;
        this.deck = new Cards();
        this.hand = this.deck.deck.slice(0,5); //not sure how this got nested?
        this.deck = this.deck.deck.slice(5);
        this.renderHand = this.renderHand.bind(this); 
        this.drawCard = this.drawCard.bind(this); 
        this.renderDraw = this.renderDraw.bind(this);
        this.updateHp = this.updateHP.bind(this);
        this.opponentDraw = this.opponentDraw.bind(this);
        this.gameStart = this.gameStart.bind(this);
        this.isOver = this.isOver.bind(this); 
        this.checkCards = this.checkCards.bind(this);
        this.renderHP = this.renderHP.bind(this);
        this.restart = this.restart.bind(this); 
        this.renderHand(this.hand);
        this.renderDraw();
        this.renderHP();
        this.gameStart(this.hp, this.oppHP);
    }



    drawCard(){
        let i = Math.floor((Math.random() * this.deck.length))
        let monster = document.createElement("div");
        let attack = document.createElement("div");
        let defense = document.createElement("div");

        monster.className = `monster`;
        monster.innerHTML = this.deck[i].Monster;
        
        attack.className = "attack";
        attack.innerHTML = `Attack: ${this.deck[i].Attack}`;
        
        defense.className = "defense";
        defense.innerHTML = `Defense: ${this.deck[i].Defense}`;

        monster.getAttribute = {Name:   this.deck[i].Monster,
                                Attack:  this.deck[i].Attack,
                                Defense: this.deck[i].Defense}


        monster.appendChild(attack);
        monster.appendChild(defense);

        document.getElementById("player-cards").appendChild(monster); 
    }

    renderDraw(){
        let draw = document.createElement('div');
        let board = document.getElementById('board-text')
        draw.innerHTML = `<p> Draw </p>`;
        draw.classList.add("draw-card")
        document.getElementById('hand-container').append(draw);

        let monsters = document.getElementById('user-card')
        let monsters2 = document.getElementById("player-cards");    
        const that = this;

        draw.addEventListener('click', function(){
            if ((monsters2.childElementCount + monsters.childElementCount) < 7) {
                that.drawCard(); 
                
            }else{
                board.innerHTML = "<p>Maximum number of cards is 7 </p>"
            }
        });

    }

    renderHand(hand){
        this.hand = hand; 
        for (let i = 0; i < this.hand.length; i++) {
            this.drawCard(); 
        }
    }

    renderHP(){
        let showHP = document.createElement("div");
        let opponent = document.createElement("div");

        showHP.classList.add("hp");
        opponent.classList.add("hp");

        showHP.innerHTML = null;
        opponent.innerHTML = null;
        showHP.innerHTML = `<p> Current HP: ${this.hp} </p>`
        opponent.innerHTML = `<p> Opponents HP: ${this.oppHP} </p>`

        document.getElementById('middle-left').append(showHP);
        document.getElementById('middle-right').append(opponent);
    }

    updateHP(){
        let showHP = document.getElementById('middle-left')
        let opponent = document.getElementById('middle-right')
        showHP.classList.add("hp");
        opponent.classList.add("hp");
        showHP.innerHTML = `<p> Current HP: ${this.hp} </p>`
        opponent.innerHTML = `<p> Opponents HP: ${this.oppHP} </p>`
    }

    
    opponentDraw(){
        let i = Math.floor((Math.random() * this.deck.length))

        let monster = document.createElement("div");
        let attack = document.createElement("div");
        let defense = document.createElement("div");
        let enemyCard = document.getElementById("enemy-card");

        monster.className = `opp-monster`;
        monster.innerHTML = this.deck[i].Monster;

        attack.className = "attack";
        attack.innerHTML = `Attack: ${this.deck[i].Attack}`;

        defense.className = "defense";
        defense.innerHTML = `Defense: ${this.deck[i].Defense}`;

        monster.getAttribute = {
            Name: this.deck[i].Monster,
            Attack: this.deck[i].Attack,
            Defense: this.deck[i].Defense
        }

        monster.appendChild(attack);
        monster.appendChild(defense);

        if(enemyCard.children.length < 1){
            enemyCard.appendChild(monster); 
        }
    }

     checkCards(){
         let userCards = document.getElementById('user-card')
         let board = document.getElementById('board-text')
         let monsters = document.querySelectorAll('.monster');

        if(userCards.childElementCount < 1){
            board.innerHTML = `<p> Please place a card</p>`
        }else if(userCards.childElementCount > 1){
            board.innerHTML = `<p> Please place one card at a time </p>`
            document.getElementById("player-cards").append(userCards.lastElementChild)
        }else{
            board.innerHTML = ""
        }
    }

    restart(){
        let modal = document.getElementById("replayModal");
        let yes = document.getElementById("replay-yes");
        let no = document.getElementById("replay-no");
        let modalHeader = document.getElementById("game-outcome");
        modal.style.display= "block";

        yes.onclick = function(){
            location.reload();
        }

        no.onclick = function(){
            document.getElementById("game-outcome").innerHTML = "Thank you for playing! Please checkout my socials!";
            document.getElementById("play-again").innerHTML = ""
            document.getElementById("play-again").append(document.getElementById("socials"))
            // document.getElementById("game-outcome").append(document.getElementById("socials"));
            document.getElementById("replay-yes").remove();
            document.getElementById("replay-no").remove();
        }
    }

    isOver(){
        if(this.hp <= 0 || this.oppHP <= 0){
            if(this.hp <= 0){ 
                document.getElementById("game-outcome").innerHTML = "You Lose"
            }else if(this.oppHP <= 0) {
                document.getElementById("game-outcome").innerHTML = "You Win!"
            }
            this.hp = 30;
            this.oppHP = 30; 
            this.restart();
        }
         
    }

    gameStart(hp, oppHP){
        setInterval((this.checkCards), 1570);
        setInterval((this.isOver), 50); 

        const that = this;
        this.hp = hp;
        this.oppHP = oppHP; 
        this.opponentDraw(); 
        
        let userCards = document.getElementById('user-card')
        let enemyCards = document.getElementById('enemy-card')
        let oppMonsters = document.querySelectorAll('.opp-monster')
        let board = document.getElementById('board-text')
        let monsters = document.querySelectorAll('.monster');
        let attackBtn = document.getElementById('attack');
        let defendBtn = document.getElementById('defend');
        let discardBtn = document.getElementById('discard');
        
    
        attackBtn.addEventListener('click', function () {
            oppMonsters = document.querySelectorAll('.opp-monster');
            oppMonsters.forEach(monster => {
            if (userCards.childElementCount === 1) {
                let userAtk = userCards.firstElementChild.getAttribute.Attack
                let userDfn = userCards.firstElementChild.getAttribute.Defense
                let enemyAtk = enemyCards.firstElementChild.getAttribute.Attack
                let enemyDfn = enemyCards.firstElementChild.getAttribute.Defense
                
                if(userAtk >= enemyDfn){
                    that.oppHP -= (userAtk - enemyDfn); 
                    enemyDiscard.appendChild(monster);
                    that.opponentDraw();
                }else if(enemyAtk > userDfn) {
                    that.hp -= (enemyAtk - userDfn); 
                }
                that.updateHP();
                
            } else {
                board.innerHTML= `<p> Must place a card in order to Attack! </p>`
            }
            });
        })
        
            

        function withDraw(){ 
            monsters = document.querySelectorAll('.monster')
            monsters.forEach(monster => {
                defendBtn.addEventListener('click', function () {
                    document.getElementById("player-cards").appendChild(monster);
                });
            })
        }

        function discard(){
            discardBtn.addEventListener('click', function () {
                if(userCards.childElementCount > 0){
                    userCards.removeChild(userCards.lastChild);
                    that.hp -= 2;
                    that.updateHP();
                }else{
                    board.innerHTML = `<p> No cards to discard </p>`
                }

            });
        }

    
    setInterval((withDraw), 250);
    setInterval((discard), 50);
    
    



    }

}

export default Game;