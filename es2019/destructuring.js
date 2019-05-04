const person = {
    name: {
        first: 'Peter',
        last: 'Smith',
    },
    age: 27,
    role: 'admin'
};

const firstNameOld = person.firstName;
const lastNameOld = person.lastName;

const { name: { first: firstName, last: lastName} } = person;
console.log(firstName, lastName);

const { role = 'user ' } = person;
console.log(role);

const { permissions: {role2 = 'user'} = {}} = person;
console.log(role2);

function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest' } = {}) {
    console.log('user:', user, 'port:', port, 'host:', host);
} {

}

connect();

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
};

const { duck, ...otherAnimals } = dict;

console.log(duck);
console.log(otherAnimals);