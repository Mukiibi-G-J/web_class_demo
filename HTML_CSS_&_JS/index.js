const error_message_2 = document.getElementById("error_message_2");
const error_message_1 = document.getElementById("error_message_1");
const number_2 = document.getElementById("number_2");
const number_1 = document.getElementById("number_1");
const multiplication = document.getElementById("multiplication");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const results_text = document.getElementById("results_text");
number_1.addEventListener("keyup", (e) => {
  if (!isNaN(Number(e.target.value))) {
    error_message_1.style.color = "green";

    error_message_1.innerHTML = "Number is ok";

    console.log("The text is a number.");
  } else {
    error_message_1.style.color = "#ff0000";

    error_message_1.innerHTML = "Please put in a number";
  }
});
number_2.addEventListener("keyup", (e) => {
  if (!isNaN(Number(e.target.value))) {
    error_message_2.style.color = "green";

    error_message_2.innerHTML = "Number is ok";

    console.log("The text is a number.");
  } else {
    error_message_2.style.color = "#ff0000";

    error_message_2.innerHTML = "Please put in a number";
  }
});

multiplication.addEventListener("click", () => {
  document.cookie = "operation=multiplication";
});

subtraction.addEventListener("click", () => {
  document.cookie = "operation=subtraction";
});

addition.addEventListener("click", () => {
  document.cookie = "operation=addition";
});

division.addEventListener("click", () => {
  document.cookie = "operation=division";
});

const performOperation = (operation) => {
  const number1 = Number(number_1.value);
  const number2 = Number(number_2.value);
  let result = null;

  if (operation === "multiplication") {
    result = number1 * number2;
  } else if (operation === "subtraction") {
    result = number1 - number2;
  } else if (operation === "addition") {
    result = number1 + number2;
  } else if (operation === "division") {
    result = number1 / number2;
  }
  return result;
};
const getOperationFromCookie = () => {
  const cookieString = document.cookie;
  const cookieArray = cookieString.split("; ");

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].split("=");
    if (cookie[0] === "operation") {
      //   console.log(cookie[1]);
      return cookie[1];
    }
  }
};
equal.addEventListener("click", () => {
  const operation = getOperationFromCookie();
  console.log(operation);
  if (!operation) {
    alert("please first selet operations");
  }
  const results = performOperation(operation);
  results_text.innerHTML = results;
});
