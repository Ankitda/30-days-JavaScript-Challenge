function add(num1, num2){
    return num1 + num2
}

export default add

export function substract(num1, num2){
    if(num1 > num2) return -1;
    return num2 - num1
} 

export function multiply(num1, num2){
    if(num1 === 0 || num2 === 0) return 0;
    return Math.abs(num1 * num2)    
}

export function divide(num1, num2){
    if(num1 === 0 || num2 === 0) return 0;
    return Math.abs(num1 / num2)
}