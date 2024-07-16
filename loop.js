// for loop Activity - 1

function printNumbers(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}

function mutiplyByFive(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

// printNumbers();
// mutiplyByFive(5);

// while loop Activity - 2 

function sum(){
    let i=1;
    let result = 0;
    while(i<=10){
        result += i;
        i++;
    }
    return result;
}

function printNum(){
    let i = 10;
    while(i>0){
        console.log(i);
        i--;
    }
}

// printNum();
// console.log(sum());

// do while loop Activity - 3

function printNum(){
    let i = 1;
    do{
        console.log(i);
        i++;
    }while(i<=5);
}

function factorial(num){
    
    if(num === 0 || num === 1){
        return 1;
    }
    
    let result = 1;

    do{
        result *= num;
        num--;
    }while(num > 0);

    return result;
}

// printNum();

// nested Loop Activity - 4

function pattern(num){
    let star = "";
    for(let i=0; i<num; i++){
        star = "";
        for(let j=0; j<i+1; j++){
            star += " *";
        }
        console.log(star);
    }
}

// pattern(10);

// loop control statements Activity - 5

function skip(num){
    if(num >= 1 && num <=10 ){
        for(let i=1; i<=10; i++){
            if(i === num){
                continue;
            }else{
                console.log(i);
            }
        }
    }else{
        return "Not a Valid Number"
    }

}

function stopLoop(num){
    for(let i=1; i<=10; i++){
        if(i === num){
            break;
        }
        console.log(i);
    }
}

stopLoop(7);