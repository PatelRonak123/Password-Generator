let Password = document.getElementById("Password");

const generatePassword = (
  length,
  lowercase,
  uppercase,
  numbercase,
  symbolcase,
) => {
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChar = "0123456789";
  const symbolChar = "!@#$%^&*()_+-=[]{}|;':,./<>?";

  let allowedchar = "";
  allowedchar += lowercase ? lowercaseChar : "";
  allowedchar += uppercase ? uppercaseChar : "";
  allowedchar += numbercase ? numberChar : "";
  allowedchar += symbolcase ? symbolChar : "";

  if (length <= 0) {
    document.write("Password length must be greater than 0");
  }
  if (allowedchar.length === 0) {
    document.write("At least one character type must be selected");
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * allowedchar.length);
    password += allowedchar[index];
  }
  return password;
};

const allowlength = 10;
const allowlowercase = true;
const allowuppercase = true;
const allownumbercase = true;
const allowsymbolcase = false;

const password = generatePassword(
  allowlength,
  allowlowercase,
  allowuppercase,
  allownumbercase,
  allowsymbolcase,
);

Password.innerHTML = password;
