import "./styles/index.scss";
import "../index.css"
import Game from "./game";
import Cards from "./cards";

window.addEventListener("DOMContentLoaded", () => {
    let game = new Game();
    let card = new Cards();

    let userCards = document.getElementById('user-card');
    let monsters = document.querySelectorAll('.monster');
    let oppMonsters = document.querySelectorAll('.opp-monster');

    function cards(){ 
        monsters = document.querySelectorAll('.monster');
        oppMonsters = document.querySelectorAll('.opp-monster');

        monsters.forEach(monster => {
                monster.addEventListener('click', function () {
                userCards.appendChild(monster);
            });
        })        
    }
    
    setInterval((cards) , 250);
});
