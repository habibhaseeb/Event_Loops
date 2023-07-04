function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    if (y !== 0) {
      return x / y;
    } else {
      return "Error: Cannot divide by zero!";
    }
  }
  
  console.log("Simple Calculator");
  console.log("Select operation:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter choice (1-4): ", (choice) => {
    if (choice === "1" || choice === "2" || choice === "3" || choice === "4") {
      readline.question("Enter the first number: ", (num1) => {
        readline.question("Enter the second number: ", (num2) => {
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
  
          if (choice === "1") {
            console.log("Result:", add(num1, num2));
          } else if (choice === "2") {
            console.log("Result:", subtract(num1, num2));
          } else if (choice === "3") {
            console.log("Result:", multiply(num1, num2));
          } else {
            console.log("Result:", divide(num1, num2));
          }
  
          readline.close();
        });
      });
    } else {
      console.log("Invalid input. Please enter a valid choice.");
      readline.close();
    }
  });
  