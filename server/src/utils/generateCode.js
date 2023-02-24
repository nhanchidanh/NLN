const generateCode = (stringLength) => {
  let text = "";

  let possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let possibleNumbers = "123456789";

  for (let i = 0; i < stringLength - 1; i++) {
    text += possibleLetters.charAt(
      Math.floor(Math.random() * possibleLetters.length)
    );
  }

  return `${text}${possibleNumbers.charAt(
    Math.floor(Math.random() * possibleNumbers.length)
  )}`;
};

// console.log(generateCode(2));

export default generateCode;
