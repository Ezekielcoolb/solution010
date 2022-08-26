// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// Iterate method
function spinWords(string){
    //TODO Have fun :)
    let newStr = string.split(' ')
    let array1 = []
    
    newStr.map(item => {
        if(item.length > 4) {
            let newString = item.split('').reverse().join('')
            array1.push(newString)
        } else {
            array1.push(item)
        }
        
    })
    let reverseStr = array1.join(' ')
    console.log(reverseStr); 
  }
  spinWords("This is another test")

//   Loop method
  function spinWords(string){
    // TODO Have fun :)
    let newStr = string.split(' ')
    let array1 = []
    for(let i = 0; i < newStr.length; i++) {
        if(newStr[i].length > 4) {
            let newString = newStr[i].split('').reverse().join('')
            array1.push(newString)
        } else {
            array1.push(newStr[i])
        }
        
    }
    let reverseStr = array1.join(' ')
    console.log(reverseStr);
  }
  spinWords("This is another test")