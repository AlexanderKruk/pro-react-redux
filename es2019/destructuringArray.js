const fib = [1, 1, 2, 3, 5, 8, 13];

const [ , a, ,b] = fib;

console.log(a, b);

const line = [[10, 17], [14, 7]];
const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y);

const people = ['chris', 'sandra', 'bob'];
const [e, ...others] = people;
console.log(others);

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};

const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeak')
  .map(([key]) => key);
console.log(res);

const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
}

const {coordinates: 
    {start: [startX, startY],
     end: [endX, endY]}} = shape;

console.log(startX, startY, endX, endY);