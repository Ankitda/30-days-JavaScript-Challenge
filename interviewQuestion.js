function checkSubstring(str, subString) {

    if(subString.length === 1 && str.includes(subString[0])) {
        return true
    }

    for (let i = 0; i < subString.length - 1; i++) {
        if (str.includes(subString[i]) && str.includes(subString[i + 1])) {
            if (str.indexOf(subString[i]) < str.indexOf(subString[i + 1])) {
                continue;
            } else {
                console.log("Substring is present but not with its correct order");
                return false;
            }
        } else {
            console.log("Substring is not present");
            return false;
        }
    }
    console.log("Substring is present along with its correct order");
    return true;
}

console.log(checkSubstring("abcdefg", "fg"));