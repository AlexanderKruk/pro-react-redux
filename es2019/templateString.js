const user = 'Bob';
const num = 17;
const txt = 'Hello, ' + user + ' you have ' + num + ' letters in your inbox';

const txt2 = `Hello, ${2 + 2} you have ${Date.now()} letters in your inbox`;

console.log(txt);
console.log(txt2);

const htmlOld =
    '<ul>' +
    '<li>Item One</li>' +
    '<li>Item Two</li>' + 
    '</ul>';

const items = ['tea', 'coffee'];

const htmlNew = `
<ul>
<li>${items[0]}</li>
<li>${items[1]}</li>
</ul>
`;

console.log(htmlOld);
console.log(htmlNew);
