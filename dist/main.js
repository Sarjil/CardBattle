!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=2)}([function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.monsters=["Crypttaur","Sorrowlich","Frightfang","Mornclaw","The Bewitched Fiend","The Bronze Hybrid","The Brown Statue","The Greater Killer ","The Painted Vision Behemoth","The Mad Grieve ","Foulmask","Spitewings","Glowwings","Dawncrackle","The Agitated Monstrosity","The Barren Gnoll","The Needy Thing","The Rabid Shadow Fiend","The Stormcloud Night Bison","The Scarred Jester Cobra"],this.points=[1,2,3,4,5,6,7,8,9,10],this.getDeck=this.getDeck.bind(this),this.shuffle=this.shuffle.bind(this),this.renderDeck=this.renderDeck.bind(this),this.showDeck=this.showDeck.bind(this),this.deck=new Array,this.getDeck(),this.shuffle(),this.showDeck()}var t,n,i;return t=e,(n=[{key:"getDeck",value:function(){for(var e=this.deck,t=0;t<this.monsters.length;t++){var n=Math.floor(Math.random()*this.points.length),r=Math.floor(Math.random()*(this.points.length-1)),i={Monster:this.monsters[t],Attack:this.points[n],Defense:this.points[r]};e.push(i),e.push(i),e.push(i)}return e}},{key:"shuffle",value:function(){for(var e=this.deck,t=0;t<1e3;t++){var n=Math.floor(Math.random()*e.length),r=Math.floor(Math.random()*e.length),i=e[n];e[n]=e[r],e[r]=i}}},{key:"renderDeck",value:function(){document.getElementById("deck").innerHTML="";for(var e=0;e<this.deck.length;e++){var t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.className="monster",n.className="attack",r.className="defense",t.innerHTML=this.deck[e].Monster,n.innerHTML="Attack: ".concat(this.deck[e].Attack),r.innerHTML="Defense: ".concat(this.deck[e].Defense),t.appendChild(n),t.appendChild(r),document.getElementById("deck").appendChild(t)}}},{key:"showDeck",value:function(){}}])&&r(t.prototype,n),i&&r(t,i),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hp=20,this.oppHP=20,this.deck=new i,this.hand=this.deck.deck.slice(0,5),this.deck=this.deck.deck.slice(5),this.renderHand=this.renderHand.bind(this),this.drawCard=this.drawCard.bind(this),this.renderDraw=this.renderDraw.bind(this),this.updateHp=this.updateHP.bind(this),this.opponentDraw=this.opponentDraw.bind(this),this.gameStart=this.gameStart.bind(this),this.checkCards=this.checkCards.bind(this),this.renderHP=this.renderHP.bind(this),this.isOver=this.isOver.bind(this),this.renderHand(this.hand),this.renderDraw(),this.renderHP(),this.gameStart(this.hp,this.oppHP)}var t,n,r;return t=e,(n=[{key:"drawCard",value:function(){var e=Math.floor(Math.random()*this.deck.length),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");t.className="monster",t.innerHTML=this.deck[e].Monster,n.className="attack",n.innerHTML="Attack: ".concat(this.deck[e].Attack),r.className="defense",r.innerHTML="Defense: ".concat(this.deck[e].Defense),t.getAttribute={Name:this.deck[e].Monster,Attack:this.deck[e].Attack,Defense:this.deck[e].Defense},t.appendChild(n),t.appendChild(r),document.getElementById("player-cards").appendChild(t)}},{key:"renderDraw",value:function(){var e=document.createElement("div"),t=document.getElementById("board-text");e.innerHTML="<p> Draw </p>",e.classList.add("draw-card"),document.getElementById("hand-container").append(e);var n=document.getElementById("user-card"),r=document.getElementById("player-cards"),i=this;e.addEventListener("click",(function(){r.childElementCount+n.childElementCount<7?i.drawCard():t.innerHTML="<p>Maximum number of cards is 7 </p>"}))}},{key:"renderHand",value:function(e){this.hand=e;for(var t=0;t<this.hand.length;t++)this.drawCard()}},{key:"renderHP",value:function(){var e=document.createElement("div"),t=document.createElement("div");e.classList.add("hp"),t.classList.add("hp"),e.innerHTML=null,t.innerHTML=null,e.innerHTML="<p> Current HP: ".concat(this.hp," </p>"),t.innerHTML="<p> Opponents HP: ".concat(this.oppHP," </p>"),document.getElementById("middle-left").append(e),document.getElementById("middle-right").append(t)}},{key:"updateHP",value:function(){var e=document.getElementById("middle-left"),t=document.getElementById("middle-right");e.classList.add("hp"),t.classList.add("hp"),e.innerHTML="<p> Current HP: ".concat(this.hp," </p>"),t.innerHTML="<p> Opponents HP: ".concat(this.oppHP," </p>")}},{key:"isOver",value:function(){(this.hp<=0||this.oppHP<=0)&&(this.hp<=0&&alert("You Lose!"),this.oppHP<=0&&alert("You Win!"),this.gameStart())}},{key:"opponentDraw",value:function(){var e=Math.floor(Math.random()*this.deck.length),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),i=document.getElementById("enemy-card");t.className="opp-monster",t.innerHTML=this.deck[e].Monster,n.className="attack",n.innerHTML="Attack: ".concat(this.deck[e].Attack),r.className="defense",r.innerHTML="Defense: ".concat(this.deck[e].Defense),t.getAttribute={Name:this.deck[e].Monster,Attack:this.deck[e].Attack,Defense:this.deck[e].Defense},t.appendChild(n),t.appendChild(r),i.children.length<1&&i.appendChild(t)}},{key:"checkCards",value:function(){var e=document.getElementById("user-card"),t=document.getElementById("board-text");document.querySelectorAll(".monster"),e.childElementCount<1?t.innerHTML="<p> Please place a card </p>":e.childElementCount>1?(t.innerHTML="<p> Please place one card at a time </p>",document.getElementById("player-cards").append(e.lastElementChild)):t.innerHTML=""}},{key:"gameStart",value:function(e,t){setInterval(this.checkCards,1570),setInterval(this.isOver,50);var n=this;this.hp=e,this.oppHP=t,this.opponentDraw();var r=document.getElementById("user-card"),i=document.getElementById("enemy-card"),d=document.getElementById("enemy-discard"),a=(document.getElementById("player-discard"),document.querySelectorAll(".opp-monster"),document.getElementById("board-text")),c=(document.querySelectorAll(".monster"),document.getElementById("attack")),o=document.getElementById("defend"),s=document.getElementById("discard");c.addEventListener("click",(function(){document.querySelectorAll(".opp-monster").forEach((function(e){if(1===r.childElementCount){var t=r.firstElementChild.getAttribute.Attack,c=r.firstElementChild.getAttribute.Defense,o=i.firstElementChild.getAttribute.Attack,s=i.firstElementChild.getAttribute.Defense;t>=s?(n.oppHP-=t-s,d.appendChild(e),n.opponentDraw()):o>c&&(n.hp-=o-c),n.updateHP()}else a.innerHTML="<p> Must place a card in order to Attack </p>"}))})),setInterval((function(){document.querySelectorAll(".monster").forEach((function(e){o.addEventListener("click",(function(){document.getElementById("player-cards").appendChild(e)}))}))}),250),setInterval((function(){s.addEventListener("click",(function(){r.removeChild(r.lastChild)}))}),50)}}])&&d(t.prototype,n),r&&d(t,r),e}();window.addEventListener("DOMContentLoaded",(function(){new i,new a;var e=document.getElementById("user-card"),t=(document.getElementById("enemy-discard"),document.querySelectorAll(".monster"));document.querySelectorAll(".opp-monster");setInterval((function(){t=document.querySelectorAll(".monster"),document.querySelectorAll(".opp-monster"),t.forEach((function(t){t.addEventListener("click",(function(){e.appendChild(t)}))}))}),250)}))}]);
//# sourceMappingURL=main.js.map