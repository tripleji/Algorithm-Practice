// 1. 객체 형태로 만들엇을 경우!

// Color
const BLACK = 'black';
const BROWN = 'brown';
const RED = 'red';
const ORANGE = 'orange';
const YELLOW = 'yellow';
const GREEN = 'green';
const BLUE = 'blue';
const VIOLET = 'violet';
const GREY = 'grey';
const WHITE = 'white';

// ENUM
const COLOR = {
  [BLACK]: BLACK,
  [BROWN]: BROWN,
  [RED]: RED,
  [ORANGE]: ORANGE,
  [YELLOW]: YELLOW,
  [GREEN]: GREEN,
  [BLUE]: BLUE,
  [VIOLET]: VIOLET,
  [GREY]: GREY,
  [WHITE]: WHITE,
};

const DATA = {
  [COLOR[BLACK]]: {
    value: 0,
    multiple: 1,
  },
  [COLOR[BROWN]]: {
    value: 1,
    multiple: 10,
  },
  [COLOR[RED]]: {
    value: 2,
    multiple: 100,
  },
  [COLOR[ORANGE]]: {
    value: 3,
    multiple: 1000,
  },
  [COLOR[YELLOW]]: {
    value: 4,
    multiple: 10000,
  },
  [COLOR[GREEN]]: {
    value: 5,
    multiple: 100000,
  },
  [COLOR[BLUE]]: {
    value: 6,
    multiple: 1000000,
  },
  [COLOR[VIOLET]]: {
    value: 7,
    multiple: 10000000,
  },
  [COLOR[GREY]]: {
    value: 8,
    multiple: 100000000,
  },
  [COLOR[WHITE]]: {
    value: 9,
    multiple: 1000000000,
  },
};

// 4700이 나오게하라 
const yellow = DATA[YELLOW].value; // 4
const violet = DATA[VIOLET].value; // 7
const red = DATA[RED].multiple; // 100

const combination = function(param1, param2, param3) {

  return (param1+ '' + param2) * param3;
}
console.log(combination(yellow, violet, red));

/*
2. 배열 형태로 만들었을 경우!

// Color
const BLACK = 'black';
const BROWN = 'brown';
const RED = 'red';
const ORANGE = 'orange';
const YELLOW = 'yellow';
const GREEN = 'green';
const BLUE = 'blue';
const VIOLET = 'violet';
const GREY = 'grey';
const WHITE = 'white';

// ENUM
const COLOR = {
  [BLACK]: BLACK,
  [BROWN]: BROWN,
  [RED]: RED,
  [ORANGE]: ORANGE,
  [YELLOW]: YELLOW,
  [GREEN]: GREEN,
  [BLUE]: BLUE,
  [VIOLET]: VIOLET,
  [GREY]: GREY,
  [WHITE]: WHITE,
};

[
  {
    color: BLACK,
    value: 0,
    multiple: 1,
  },
  {
    color: BROWN,
    value: 1,
    multiple: 10,
  },
  {
    color: RED,
    value: 2,
    multiple: 100,
  },
  {
    color: ORANGE,
    value: 3,
    multiple: 1000,
  },
  {
    color: YELLOW,
    value: 4,
    multiple: 10000,
  },
  {
    color: GREEN,
    value: 5,
    multiple: 100000,
  },
  {
    color: BLUE,
    value: 6,
    multiple: 1000000,
  },
  {
    color: VIOLET,
    value: 7,
    multiple: 10000000,
  },
  {
    color: GREY,
    value: 8,
    multiple: 100000000,
  },
  {
    color: WHITE,
    value: 9,
    multiple: 1000000000,
  }
];

function RESULT (param1, param2, param3) {
  return (param1.value + '' + param2.value) * param3.multiple;
}

*/
