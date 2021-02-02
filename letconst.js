// const variable ar babohar: const variable not changeable && const variable ta scope ar modhe thakbe, mane leak hobe na.

const hubby = 'Elias Kanchon';
// hubby = 'Omar Sunny';
console.log(hubby);


const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
// numbers = ['Sunny', 'Salman', 'Omit Hasan'];
console.log(numbers);


const nayok = {name:'sakib khan', phone:4578};
console.log(nayok);






// let variable ar babohar: let variable changeable && let variable ta scope ar modhe thakbe, mane leak hobe na.

let patientName = 'Rahim Chacha';
patientName = 'Fatema Khala';
console.log(patientName);


let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i);