import Cards from './cards';

class Game{
    constructor(){
        this.hp = 20;
        this.oppHP = 20;
        this.deck = new Cards();
        this.hand = this.deck.deck.slice(0,5); //not sure how this got nested?
        this.deck = this.deck.deck.slice(5);
        this.renderHand = this.renderHand.bind(this); 
        this.drawCard = this.drawCard.bind(this); 
        this.renderDraw = this.renderDraw.bind(this);
        this.updateHp = this.updateHP.bind(this);
        this.opponentDraw = this.opponentDraw.bind(this);
        this.gameStart = this.gameStart.bind(this);
        this.checkCards = this.checkCards.bind(this);
        this.renderHand(this.hand);
        this.renderDraw();
        this.updateHP(this.hp);
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


        monster.appendChild(attack);
        monster.appendChild(defense);

        document.getElementById("player-cards").appendChild(monster); 
    }

    renderDraw(){
        let draw = document.createElement('div');
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
                alert("Maximum number of cards is 7")
            }
        });

    }

    renderHand(hand){
        this.hand = hand; 
        for (let i = 0; i < this.hand.length; i++) {
            this.drawCard(); 
        }
    }

    updateHP(hp, oppHP){
        this.hp = hp;
        this.opponent = oppHP; 

        let showHP = document.createElement("div");
        let opponent = document.createElement("div");

        showHP.classList.add("hp");
        opponent.classList.add("hp");

        showHP.innerHTML = `<p> Current HP: ${this.hp} </p>`
        opponent.innerHTML = `<p> Opponents HP: ${this.oppHP} </p>`

        document.getElementById('middle-left').append(showHP);
        document.getElementById('middle-right').append(opponent);
    }

    isOver(hp, oppHP){
        if(hp === 0 || oppHP === 0){
         return true; 
        }else{
            return false;
        }
    }

    opponentDraw(){
        let i = Math.floor((Math.random() * this.deck.length))

        let monster = document.createElement("div");
        let attack = document.createElement("div");
        let defense = document.createElement("div");

        monster.className = `opp-monster`;
        monster.innerHTML = this.deck[i].Monster;

        attack.className = "attack";
        attack.innerHTML = `Attack: ${this.deck[i].Attack}`;

        defense.className = "defense";
        defense.innerHTML = `Defense: ${this.deck[i].Defense}`;


        monster.appendChild(attack);
        monster.appendChild(defense);

        document.getElementById("opp-card").appendChild(monster); 
    }

     checkCards(){
         let userCards = document.getElementById('user-card')
         let board = document.getElementById('board-text')
         let monsters = document.querySelectorAll('.monster');

        if(userCards.childElementCount < 1){
            board.innerHTML = `<p> Please play a card </p>`
        }else if(userCards.childElementCount > 1){
            board.innerHTML = `<p> Please play one card at a time </p>`
            document.getElementById("player-cards").append(userCards.lastElementChild)
        }else{
            board.innerHTML = ""
        }
    }
    gameStart(hp, oppHP){
        setInterval((this.checkCards), 1000);
        this.hp = hp;
        this.oppHP = oppHP; 

        // while(!this.isOver(this.hp, this.oppHp))
        this.opponentDraw(); 
        
        let userCards = document.getElementById('user-card')
        let board = document.getElementById('board-text')
        let monsters = document.querySelectorAll('.monster');
        
        




    }

}

export default Game;