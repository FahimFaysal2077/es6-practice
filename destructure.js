const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom Hancks', 'Tom Cruise', 'Tom Yarn']};


const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}


const {leader} = complexObject.info;



// const gfName = person.gfName;
// const phone = person.phone;


// Object Destructure:
const { address, phone, gfName, salary } = person;

console.log(gfName, phone, salary, address);
console.log(gfName, phone, salary, address);




// Array Destructur:
const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(restFriends);