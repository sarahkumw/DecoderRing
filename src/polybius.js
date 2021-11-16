
const polybiusModule = (function () {
  //reference data set
  const polybiusSquare = [
    {lett:"a", num:11}, {lett:"b", num:21}, {lett:"c", num:31}, {lett:"d", num:41}, {lett:"e", num:51}, 
    {lett:"f", num:12}, {lett:"g", num:22}, {lett:"h", num:32}, {lett:"i", num:42}, {lett:"k", num:52},
    {lett:"l", num:13}, {lett:"m", num:23}, {lett:"n", num:33}, {lett:"o", num:43}, {lett:"p", num:53},
    {lett:"q", num:14}, {lett:"r", num:24}, {lett:"s", num:34}, {lett:"t", num:44}, {lett:"u", num:54}, 
    {lett:"v", num:15}, {lett:"w", num:25}, {lett:"x", num:35}, {lett:"y", num:45}, {lett:"z", num:55}, {lett:"j", num:42}
  ];
  
  function polybius(input, encode = true) {
    let newString = "";
    if (encode === true){//encoding
      //ignore capitals
      input = input.toLowerCase();
      for(const char of input){
        //keep spaces as they are
        if (char === " ") {
          newString += char
        }
        else {
          //find corresponding object to character and return object.num
          let value = polybiusSquare.find((letter) => letter.lett === char)
          newString += value.num
        }
      }
    }
    else {//decoding
      const encodedArray = input.split(" ");
      //guard clause
      if (encodedArray.some((number) => number.length % 2 === 1)) return false;
      let values = "";
      for (let i=0; i<input.length; i++){
        //keep spaces as they are
        if (input[i] === " ") {
          newString += " ";
        } 
        else{
          values += input[i];
          //separate two numbers at a time
          if (values.length === 2) {
            //"i/j" solution
            if (values == 42){
              newString += "i/j"
            }
            //find object that corresponds to number and return object.lett
            else {
              let found = polybiusSquare.find((letter) => values == letter.num);
              newString += found.lett
            }
            values = "";
          }
        }
      }
    }
    return newString
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
