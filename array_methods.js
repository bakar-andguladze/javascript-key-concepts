// Sample Arrays: 
const num_list = [10, 2, 11, 0, 7, 24, 1, 1, 19, 48, 45, 38]

const gang = [
    { firstname: "Lucius", lastname: "Vorenus" },
    { firstname: "Titus", lastname: "Pullo" },
    { firstname: "Mark", lastname: "Antony" },
    { firstname: "Octavian", lastname: "Caesar" },
    { firstname: "Marcus", lastname: "Cato" },
    { firstname: "Erastes", lastname: "Fulmen" },    
]

// filter: creates a new array filled with elements that pass a test provided by a function
let filtered = num_list.filter(num => {
    return num%2 == 0;
});

console.log(filtered);

// map: creates a new array from calling a function for every array element
let arr = num_list.map(num => {
    return {
        old: num,
        new: num * 2
    }
});

console.log(arr)


// forEach: calls a function for each element in an array
gang.forEach((member) => {
    console.log(`${member.firstname} ${member.lastname} kicks ass!`) 
})


// find: finds an element 
let gang_member = gang.find((member) => {
    return member.lastname === "Vorenus"
});

console.log(`${gang_member.firstname} ${gang_member.lastname} at your service!`);

// some
let is_any = num_list.some(x => {
    return x > 10;
})

console.log(is_any);

// every
let is_every = num_list.every(x => {
    return x > 10;
})

console.log(is_every);

// reduce: runs reducer function for each element of the array
const sum = num_list.reduce((currentTotal, num) => {
    return num + currentTotal
}, 0);

console.log(sum);

// includes: returns true if an array/string contains a specified element/substring
let incl = num_list.includes(17);
console.log(incl);
