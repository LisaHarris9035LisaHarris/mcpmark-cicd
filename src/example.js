// This file has been fixed to pass linting
const usedVariable = 'I am used';

function exampleFunction() {
  // console.log('This would trigger a warning for no-console');
  let missingSemi = 'This line now has a semicolon';
  let singleQuotes = 'This uses single quotes instead of double quotes';
  return usedVariable + missingSemi + singleQuotes;
}

exampleFunction();