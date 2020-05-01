
class Cards{
    constructor(){
        this.monsters = ["Crypttaur",
        "Sorrowlich",
        "Frightfang",
        "Mornclaw",
        "The Bewitched Fiend",
        "The Bronze Hybrid",
        "The Brown Statue",
        "The Greater Killer ",
        "The Painted Vision Behemoth",
        "The Mad Grieve ",
        "Foulmask",
        "Spitewings",
        "Glowwings",
        "Dawncrackle",
        "The Agitated Monstrosity",
        "The Barren Gnoll",
        "The Needy Thing",
        "The Rabid Shadow Fiend",
        "The Stormcloud Night Bison",
        "The Scarred Jester Cobra",
        ];
        
        this.points = [1,2,3,4,5,6,7,8,9,10];

        this.getDeck = this.getDeck.bind(this); 
        this.shuffle = this.shuffle.bind(this);
        this.renderDeck = this.renderDeck.bind(this);
        this.showDeck = this.showDeck.bind(this);
        this.deck = new Array();
        this.getDeck();
        this.shuffle();
        this.showDeck();
        // this.renderDeck(); 
    }
    
    
    getDeck() {
      let deck = this.deck;

      for (let i = 0; i < this.monsters.length; i++) {
              let x = Math.floor((Math.random() * this.points.length));
              let y = Math.floor((Math.random() * (this.points.length - 1)));
              let card = { Monster: this.monsters[i], Attack: this.points[x], Defense: this.points[y] };
              deck.push(card);
              deck.push(card);
              deck.push(card);
       }
     
     return deck;
    }

    shuffle() {
     let deck = this.deck;
     for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
     }
   }

    renderDeck() {
        document.getElementById("deck").innerHTML='';

        for (let i = 0; i < this.deck.length; i++) {

            let monster = document.createElement("div");
            let attack = document.createElement("div");
            let defense = document.createElement("div");

            monster.className = "monster";
            attack.className = "attack";
            defense.className = "defense";

            monster.innerHTML = this.deck[i].Monster;
            attack.innerHTML = `Attack: ${this.deck[i].Attack}`;
            defense.innerHTML = `Defense: ${this.deck[i].Defense}`;
            
            monster.appendChild(attack);
            monster.appendChild(defense);

            document.getElementById("deck").appendChild(monster);
        }
    }

    showDeck(){
        // let showBtn = `<input type="submit" value="Show Deck" />`
        // document.getElementById('deck').append(showBtn);
        // showBtn.addEventListener('click', renderDeck);

    }

}


export default Cards;