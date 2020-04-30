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

        document.getElementById("middle-cards").appendChild(monster); 
    }

    renderDraw(){
        let draw = document.createElement('div');
        draw.innerHTML = `<p> Draw </p>`;
        draw.classList.add("draw-card")
        document.getElementById('player-hand').append(draw);
        let monsters2 = document.getElementById("middle-cards");
         
        

        const that = this;
        draw.addEventListener('click', function(){
            if (monsters2.childElementCount < 7) {
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

    gameStart(hp, oppHP){
        this.hp = hp;
        this.oppHP = oppHP; 

        this.opponentDraw(); 

    }

}

export default Game;