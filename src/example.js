// This file contains intentional linting errors to test the workflow
const unusedVariable = "I'm not used";

function exampleFunction() {
  console.log("This should trigger a warning for no-console");
  let missingSemi = "This line is missing a semicolon"
  let doubleQuotes = "This should use single quotes instead of double quotes"
  return missingSemi + doubleQuotes;
}

exampleFunction();