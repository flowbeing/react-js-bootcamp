let allPossibleWinningCombinations = [
  // o, o , o
  // -, - , -
  // -, - , -
  [
    { rowNum: 0, colNum: 0 },
    { rowNum: 0, colNum: 1 },
    { rowNum: 0, colNum: 2 },
  ],
  // -, - , -
  // o, o , o
  // -, - , -
  [
    { rowNum: 1, colNum: 0 },
    { rowNum: 1, colNum: 1 },
    { rowNum: 1, colNum: 2 },
  ],
  // -, - , -
  // -, - , -
  // o, o , o
  [
    { rowNum: 2, colNum: 0 },
    { rowNum: 2, colNum: 1 },
    { rowNum: 2, colNum: 2 },
  ],
  // o, - , -
  // o, - , -
  // o, - , -
  [
    { rowNum: 0, colNum: 0 },
    { rowNum: 1, colNum: 0 },
    { rowNum: 2, colNum: 0 },
  ],
  // -, o , -
  // -, o , -
  // -, o , -
  [
    { rowNum: 0, colNum: 1 },
    { rowNum: 1, colNum: 1 },
    { rowNum: 2, colNum: 1 },
  ],
  // -, - , o
  // -, - , o
  // -, - , o
  [
    { rowNum: 0, colNum: 2 },
    { rowNum: 1, colNum: 2 },
    { rowNum: 2, colNum: 2 },
  ],
  // o, - , -
  // -, o , -
  // -, - , o
  [
    { rowNum: 0, colNum: 0 },
    { rowNum: 1, colNum: 1 },
    { rowNum: 2, colNum: 2 },
  ],
  // -, - , o
  // -, o , -
  // o, - , -
  [
    { rowNum: 0, colNum: 2 },
    { rowNum: 1, colNum: 1 },
    { rowNum: 2, colNum: 0 },
  ],
];

export default allPossibleWinningCombinations;
