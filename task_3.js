const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  if (Object.keys(employees).length === 0) {
    return '';
  }
  const entries = Object.entries(employees);
  let theBestEmployee = entries[0];
  for (const employee of entries) {
    if (employee[1] > theBestEmployee[1]) {
      theBestEmployee = employee;
    }
  }
  return theBestEmployee[0];
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

const sell = {};
console.log(findBestEmployee(sell));
