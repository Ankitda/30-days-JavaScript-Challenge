/**
 * Checks if a given substring is present in a string and in the correct order.
 *
 * @param {string} str - The string to search in.
 * @param {string} subString - The substring to search for.
 * @return {boolean} True if the substring is present in the correct order, false otherwise.
 */

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