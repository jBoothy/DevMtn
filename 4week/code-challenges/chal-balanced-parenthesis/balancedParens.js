/* Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:

>>> has_balanced_parens("()")
 // true

>>> has_balanced_parens("(Oh Noes!)(")
// false

>>> has_balanced_parens("((There's a bonus open paren here.)")
// false

>>> has_balanced_parens(")")
// false

>>> has_balanced_parens("(")
// false

>>> has_balanced_parens("(This has (too many closes.) ) )")
// false
You may consider a string with no parentheses balanced:

>>> has_balanced_parens("Hey...there are no parens here!")
// true

( : charCode 40 
) : charCode 41
*/
const has_balanced_parens = str =>{

  let openParens = 0;
  let closeParens = 0;

  for (let i = 0; i<str.length; i++){
    if(str.charCodeAt([i]) === 40){
      openParens++
    }else if(str.charCodeAt([i]) === 41){
      closeParens++
    }    
  }
  
  if (openParens === closeParens){
    return true
  }else{
  return false    
  }

}

console.log(has_balanced_parens("()")) //true
console.log(has_balanced_parens("(This has (too many closes.) ) )")) //false
console.log(has_balanced_parens("((There's a bonus open paren here.)")) //false
console.log(has_balanced_parens(")")) //false
console.log(has_balanced_parens("(")) //false
console.log(has_balanced_parens("(This has (too many closes.) ) )")) //false
console.log(has_balanced_parens("Hey...there are no parens here!")) //true