

const caesarModule = (function () {
  //reference data set
  const alphabetKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  function caesar(input, shift, encode = true) {
    //guard clause
    if (shift > 25 || shift < -25 || shift === 0 || shift === undefined) return false;
    if (encode === false) { //decoding
      shift = shift * -1;
    }
    //ignore capitals
    input = input.toLowerCase();
    let newString = "";
    //loop through input string
    for (const char of input) {
      //keep spaces as they are
      if (alphabetKeys.indexOf(char) === -1) {
        newString += char;
      }
      else {
        let index = alphabetKeys.indexOf(char);
        //add shift to the characters index to find the shifted character
        let pos = (index + shift) % alphabetKeys.length;
        if(pos < 0){ //check for remainder incase it goes past "z"
          pos = alphabetKeys.length + pos; //add the length incase it goes past "a" 
        } //return the shifted character
        newString += alphabetKeys[pos]
      }
    }
    return newString;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
