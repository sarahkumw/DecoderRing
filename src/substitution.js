
const substitutionModule = (function () {
  standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  //helper function to make sure alphabet is all unique characters
  function containsDups (string) {
    let characters = "";
    for (const char of string) {
      if (characters.includes(char)) {
        return true
      }
      characters += char;
    }
    return false
  };
  function substitution(input, alphabet, encode = true) {
    //guard clauses
    if (typeof(alphabet) != "string" || alphabet.length != 26) return false;
    if (containsDups(alphabet)) return false;
    let newString = "";
    //ignore capitals
    input = input.toLowerCase();
    //loop through input string
    for (const char of input) {
      if (encode === false) { //decoding
        //keep spaces as they are
        if (char === " "){
          newString += char;
        }
        else {
          //find corresponding index of given alphabet
          const index = alphabet.indexOf(char);
          //return matching index of standardAlphabet
          newString += standardAlphabet[index];
        }
      }
      else { //encoding
        if (char === " "){
          newString += char;
        }
        else {
          //find corresponding index of standardAlphabet
          const index = standardAlphabet.indexOf(char);
          //return matching index of given alphabet
          newString += alphabet[index];
        }
      }
    }
    return newString
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
