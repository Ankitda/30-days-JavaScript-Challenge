function matchWord(word) {
    const pattern = /^(?=.*J)(?=.*a)(?=.*v)(?=.*S)(?=.*c)(?=.*r)(?=.*i)(?=.*p)(?=.*t).*$/i;
    if(pattern.test(word)) {
        console.log("Words Matched");
    }else{
        console.log("Words Not Matched");
    }
}

// console.log(matchWord("Javascript"));

const pattern2 = /\d/g
const word2 = "JavaScript is a very 345d language";
console.log(word2.match(pattern2));


function checkCapital(word, type){
    if(type === "firstWord"){
        const pattern = /^[A-Z].*/;
        pattern.test(word) ? console.log("Starts with Capital") : console.log("Not Capital");
    }else if(type === "fullWord"){
        const pattern = /\b[A-Z][a-zA-Z]*\b/g;
        const words = word.match(pattern);
        console.log("words found : ", words);
    }
}

checkCapital("JavaScript Is a very good Language", "fullWord");

function matchNumberSequence(word) {
    const pattern = /\d+/g;
    const numbers = word.match(pattern);
    console.log("numbers found : ", numbers);
}

matchNumberSequence("JavaScript is a very 345d  1261 language")