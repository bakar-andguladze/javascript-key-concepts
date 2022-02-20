// ================= Array Destructuring ================= //
arr = [1, 5, 2, 12, 9, 22]

let [a, , , , , b] = arr;

console.log(a, b)


// ================ Object Destructuring ================ //
obj = {
    name: "Aurelian",
    title: "Emperor",
    nickname: "Restitutor Orbis"
}

const {name, nickname} = obj;

console.log(name, nickname)


