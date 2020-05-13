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
        this.renderHP = this.renderHP.bind(this);
        this.isOver = this.isOver.bind(this); 
        this.renderHand(this.hand);
        this.renderDraw();
        this.renderHP();
        // this.updateHP();
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

    isOver(){
        if(this.hp <= 0 || this.oppHP <= 0){
            if(this.hp <= 0) alert("You Lose!");
            if(this.oppHP <= 0) alert("You 44!");
            this.gameStart()
        }
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
            board.innerHTML = `<p> Please place a card </p>`
        }else if(userCards.childElementCount > 1){
            board.innerHTML = `<p> Please place one card at a time </p>`
            document.getElementById("player-cards").append(userCards.lastElementChild)
        }else{
            board.innerHTML = ""
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
        let enemyDiscard = document.getElementById('enemy-discard')
        let playerDiscard = document.getElementById('player-discard')
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
                board.innerHTML= `<p> Must place a card in order to Attack </p>`
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
                userCards.removeChild(userCards.lastChild);
            });
        }

    
    setInterval((withDraw), 250);
    setInterval((discard), 50);
    
    



    }

}

export default Game;