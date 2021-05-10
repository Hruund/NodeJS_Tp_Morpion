/* eslint-disable no-console */

const EMPTY_BOX = '.';

const X_SIGN = 'x';
const O_SIGN = 'o';

const PLATE_X_SIZE = 3;
const PLATE_Y_SIZE = 3;

const PLATE_SIZE = PLATE_X_SIZE * PLATE_Y_SIZE;

function isCoordValid(c) {
  return c >= 0 && c <= 2;
}

function getBoxIdFromXY(x, y) {
  return (x * PLATE_X_SIZE) + y;
}

function getBox(plate, x, y) {
  return plate[getBoxIdFromXY(x, y)];
}

function setBox(plate, x, y, sign) {
  const newPlate = plate;
  newPlate[getBoxIdFromXY(x, y)] = sign;
  return newPlate;
}

function printPlate(plate) {
  plate.forEach((box, i) => (((i + 1) % PLATE_X_SIZE)
    ? process.stdout.write(` ${box} `)
    : console.log(` ${box}\n`)));
}

function initPlate() {
  return [...Array(PLATE_SIZE).keys()].map(() => EMPTY_BOX);
}

function isCaseEmpty(plate, x, y) {
  return getBox(plate, x, y) === EMPTY_BOX;
}

function setSign(plate, x, y, sign) {
  return isCoordValid(x)
    && isCoordValid(y)
    && isCaseEmpty(plate, x, y)
    && setBox(plate, x, y, sign);
}

function isThereAWinner(plate) {
  const plateau = initPlate(),

  matches = ["xxx", "ooo"],

  results = [
    // Rows
    plateau[0][0] + plateau[0][1] + plateau[0][2], //row0
    plateau[1][0] + plateau[1][1] + plateau[1][2], //row 1 
    plateau[2][0] + plateau[2][1] + plateau[2][2], //row 1

    //columns
    plateau[0][0] + plateau[1][0] + plateau[2][0], //column0
    plateau[0][1] + plateau[1][1] + plateau[2][1], //column0
    plateau[0][2] + plateau[1][2] + plateau[2][2], //column0

    //diagonals
    plateau[0][0] + plateau[1][1] + plateau[2][2], //diagonal1
    plateau[2][0] + plateau[1][1] + plateau[0][2], //diagonal1
  ]

  for(i= 0; i< results.length; i++){
    found = matches.find(result => result == results[i])

    // Si le pattern est retrouvé, il y a un cas de victoire
    if(found !== "undefined"){
      //on retourne que c'est la victoire, pas besoin d'aller plus loin
      return true;
    }
  }
  return false;
}

function isGameNull(plate) {
  return !isThereAWinner(plate) && !plate.reduce((state, box) => box === EMPTY_BOX || state, false);
}

export {
  isCaseEmpty,
  isCoordValid,
  getBoxIdFromXY,
  getBox,
  setBox,
  printPlate,
  initPlate,
  setSign,
  isGameNull,
  isThereAWinner,
  X_SIGN,
  O_SIGN,
};