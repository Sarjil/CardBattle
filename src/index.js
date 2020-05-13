import "./styles/index.scss";
import "../index.css"
import Cards from './cards';
import Game from './game';



window.addEventListener("DOMContentLoaded", () => {
    const card = new Cards(); 
    const game = new Game(); 




    let userCards = document.getElementById('user-card');
    let enemyCards = document.getElementById('enemy-discard');
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

        // oppMonsters.forEach(monster => {
        //     monster.addEventListener('dblclick', function(){ 
        //     enemyCards.appendChild(monster); 
            
        //     })
        // })
        
    }
    
    setInterval((cards) , 250);
});
