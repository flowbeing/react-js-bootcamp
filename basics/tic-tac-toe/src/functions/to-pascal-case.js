export default function toPascalCase(someString) {
  let someStringSplit = someString.split(' ');
  let someStringPascalCase = '';

  for (var word of someStringSplit) {
    let firstLetter = word[0].toUpperCase();
    let remLetters = word.substring(1).toLowerCase();
    let wordPascal = firstLetter + remLetters;

    someStringPascalCase += wordPascal + ' ';
  }

  let lengthOfSomeStringPascalCase = someStringPascalCase.length;

  return someStringPascalCase.substring(0, lengthOfSomeStringPascalCase - 1);
}
