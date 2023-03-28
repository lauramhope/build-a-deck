// function handleSubmit(event) {
//   event.preventDefault();
  const cardSuits = ['clubs', 'diamonds', 'spades', 'hearts'];
  const cardNames = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];  
  let results = [];

  cardSuits.forEach(function(suit){
    cardNames.forEach(function(name){
      results = (name + " of " + suit);
      console.log(results);
    })
  })

// }


// window.addEventListener("load", function(){
//   document.querySelector("form").addEventListener("submit", handleSubmit);
// })





// FOR LOOP EXAMPLE
// 4 suits, 13 ranks
// [start position, count until x position, count up by 1]

// let suits = ["hearts","clubs","diamonds","spades"];
// let ranks = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
// let results;
// for(let suitCounter = 0; suitCounter < 4; suitCounter++) {
//   for(let rankCounter = 0; rankCounter < 13; rankCounter++) {
//   results = (ranks[rankCounter] + ' of ' + suits[suitCounter]);
//   }
// }


