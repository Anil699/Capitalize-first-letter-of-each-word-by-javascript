function changeCapital(string) {
    const words = string.split(' ')
    let upperString = ''
    let list = []
    console.log(words)
    for (let word of words) {
        //list.push(word.toUpperCase())
        upperString += word.toUpperCase() + ' '
    }
    return upperString
    //return list


}


const string = 'hello welcome to the world'
const result = changeCapital(string)
console.log(result)