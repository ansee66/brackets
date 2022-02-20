module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = bracketsConfig.map(inArr => inArr[0]);
  let closeBrackets = bracketsConfig.map(inArr => inArr[1]);
  let bracketPairs = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketPairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElem = stack[stack.length - 1];

    if (openBrackets.includes(currentSymbol)) {
      if (stack.length > 0 && closeBrackets.includes(currentSymbol)) {
        if (bracketPairs[currentSymbol] === topElem) {
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (bracketPairs[currentSymbol] === topElem) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

