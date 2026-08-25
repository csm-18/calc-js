import { lex } from "./lexer.js";
import { TokenTypes } from "./lexer.js";
export function calc(exp) {
  let result = "";

  //lexical analysis
  let tokens = lex(exp);
  if (tokens[tokens.length - 1].type == TokenTypes.ERROR) {
    result = tokens[tokens.length - 1].value;
    return result;
  }
  result = tokens;
  return result;
}
