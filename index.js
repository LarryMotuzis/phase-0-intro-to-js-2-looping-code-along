
function writeCards(arrayOfNames) {
    console.log('HELLLOOOOOO', arrayOfNames)
    let newArray = [];
    for(let i = 0; i < arrayOfNames.length; i++) {
        let thanksMessage = `Thank you, ${arrayOfNames[i]}, for the wonderful surprise gift!`
        newArray.push(thanksMessage);

    }
    return newArray;
}

const countDown = (numbers) => {
    while (numbers >= 0) {
        console.log(numbers--)
    }
}
