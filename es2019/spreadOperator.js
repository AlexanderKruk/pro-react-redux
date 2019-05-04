const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const resOld = Math.max.apply(Math, arr);
console.log(resOld);

const resNew = Math.max(...arr, 5, ...arr2, 10);
console.log(resNew);

const shallowCopy = [...arr, ...arr2, 4, 7];
console.log(shallowCopy);