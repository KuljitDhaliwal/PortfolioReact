export function setHeading(heading){
    const letters = heading.split("")
    let newWord
    let left = 0
    while(left < letters.length){
        if(left === 0){
            newWord = letters[left].toUpperCase()
        }else if(letters[left] === '-' || letters[left] === '_'){
            newWord += ' '
            left++
            newWord += letters[left].toUpperCase()
        }else{
            newWord += letters[left]
        }
        left++
    }
    return newWord
}