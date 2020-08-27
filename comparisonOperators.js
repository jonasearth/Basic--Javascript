// == to Comparation 
let a = 5;
function equalToFive(num) {
    if (num == 5) {
        return true;
    } else { return false } 
}

console.log(equalToFive(a)) //true

// === to verify that it is strictly equal

function equalToNumberFive(num) {
    if (num === '5') {
        return true;
    } else { return false }
}
console.log(equalToNumberFive(a)) //false

// != to diferent

function different(num1, num2){
    if(num1 != num2){
        return `${num1} and ${num2} are different`
    } else { return `${num1} and ${num2} aren't different`}
}

console.log(different(1,2)) //1 and 2 are different

// > to bigger than / and >= to bigger equal than
function biggerThan(n1, n2){
    if(n1 == n2){
        return `${n1} is qual to ${n2}`
    }
    else if(n1 > n2){
        return `${n1} is bigger than ${n2}`
    }
    else { return `${n2} is bigger than ${n1}`}
}

console.log(biggerThan(3, 5)) //5 is bigger than 3

// < to less than / and <== to less equal than

function lessThan(n1, n2){
    if(n1 == n2){
        return `${n1} is qual to ${n2}`
    }
    else if(n1 < n2){
        return `${n1} is less than ${n2}`
    }
    else { return `${n2} is less than ${n1}`}
}

console.log(lessThan(3, 5)) // 3 is less than 5

