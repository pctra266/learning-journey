function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

function reverseSnakeCaseToPascalCase(stringSnakeCase){
    var words = stringSnakeCase.split('_');
    var result = "";
    for (let i = 0; i < words.length; i++) {
        result += capitalize(words[i]);
      }
    return result;
}

console.log(reverseSnakeCaseToPascalCase('user_name') == 'UserName');