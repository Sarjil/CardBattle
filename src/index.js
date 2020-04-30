import "./styles/index.scss";
import "../index.css"
import Cards from './cards';
import Game from './game';



window.addEventListener("DOMContentLoaded", () => {
    const card = new Cards(); 
    const game = new Game(); 

    const selected = document.getElementById('user-card')
    const monsters = document.querySelectorAll('.monster');

    monsters.forEach(monster => {
        monster.addEventListener('click', function () {
            selected.appendChild(monster);
        });
        monster.addEventListener('dblclick', function () {
            document.getElementById("middle-cards").appendChild(monster);
            // selected.removeChild(monster);
        });
    })

    // const empties = document.querySelectorAll('.empty');

    // //loop through empties and call drag events
    // for (const empty of empties){
    //     empty.addEventListener('dragover', dragOver);
    //     empty.addEventListener('dragenter', dragEnter);
    //     empty.addEventListener('dragleave', dragLeave);
    //     empty.addEventListener('drop', dragDrop);
    // }

    // //fill listener

    // //drag functions
    // function dragStart(event){
    //     event.dataTransfer.setData("text", event.target.className)
    //     this.className += ' hold';
    //     setTimeout(() =>this.className = 'invisible', 0);
    // }

    // function dragEnd(){
    //     this.className = 'monster'
    // }

    // function dragOver(e){
    //     e.preventDefault(); 
    // } 
    
    // function dragEnter(e){
    //     e.preventDefault(); 
    //     this.className += ' hovered';
    // } 

    // function dragLeave(){
    //     this.className = 'empty';
    // } 

    // function dragDrop(event){
    //     this.className = 'empty';
    //     monsters[0].className += ' added'
    //     this.append(monsters[0]); 
    // } 

});
