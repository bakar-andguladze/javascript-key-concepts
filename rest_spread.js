// =================== Spread =================== //
// Array:
const numbers = [1, 2, 3, 4, 5, 7, 10, 19]
const more_numbers = [...numbers, 20, 22, 49]

console.log(more_numbers);

// Object:
const general = {
    firstname: "Mark",
    lastname: "Antony",
    age: 44,
    stars: 3
}

const update_general = {...general, stars: 4}

console.log(update_general);



// ==================== Rest ==================== //
const calculate_sum = (...numbers) => {
    sum = numbers.reduce((prevTotal, num) => {
        return num + prevTotal;
    }, 0);
    return sum;
}

sum = calculate_sum(1, 2, 3, 4);
console.log(sum);