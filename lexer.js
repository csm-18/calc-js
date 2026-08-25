export class Token {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }
}

export const TokenTypes = {
  NUMBER: 0,
  LEFT_PARENTHESIS: 1,
  RIGHT_PARENTHESIS: 2,
  PLUS: 3,
  MINUS: 4,
  MULTIPLY: 5,
  DIVIDE: 6,
  ERROR: 7,
};

export function lex(exp) {
  let tokens = [];
  let x = 0;
  while (x < exp.length) {
    if (exp[x] == " ") {
      //skip whitespace
    } else if (exp[x] == "+") {
      tokens.push(new Token(TokenTypes.PLUS, "+"));
    } else if (exp[x] == "-") {
      tokens.push(new Token(TokenTypes.MINUS, "-"));
    } else if (exp[x] == "*") {
      tokens.push(new Token(TokenTypes.MULTIPLY, "*"));
    } else if (exp[x] == "/") {
      tokens.push(new Token(TokenTypes.DIVIDE, "/"));
    } else if (exp[x] == "(") {
      tokens.push(new Token(TokenTypes.LEFT_PARENTHESIS, "("));
    } else if (exp[x] == ")") {
      tokens.push(new Token(TokenTypes.RIGHT_PARENTHESIS, ")"));
    } else if (isDigit(exp[x])) {
      let num = "";
      let y = x;
      while (y < exp.length && isDigit(exp[y])) {
        y += 1;
      }
      num = exp.slice(x, y);
      let parsedNum = Number(num);
      if (parsedNum == NaN) {
        tokens.push(new Token(TokenTypes.ERROR, "Invalid number in input!"));
        break;
      }
      tokens.push(new Token(TokenTypes.NUMBER, parsedNum));
      x = y;
      continue;
    } else {
      tokens.push(new Token(TokenTypes.ERROR, "Invalid characters in input!"));
      break;
    }
    x += 1;
  }
  return tokens;
}

function isDigit(char) {
  return (char >= "0" && char <= "9") || char == ".";
}
