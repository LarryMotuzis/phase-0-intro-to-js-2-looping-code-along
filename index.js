// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts)    {
//     for (let i = 0; i < gifts.length; i++)  {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);


function writeCards(friends)   {
    let cardArray = []
    for (let i = 0; i < friends.length; i++) {
        console.log(`Thank you, ${friends[i]}, for the wonderful surprise gift!`);
        cardArray.push(`Thank you, ${friends[i]}, for the wonderful surprise gift!`)
    }
    return cardArray;
}


function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
   
}

