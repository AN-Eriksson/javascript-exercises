const repeatString = function(words, times) {

    if (times < 0) {
        return "ERROR"
    }
    let repeatedString = "";
    
    for (let i = 1; i <= times; i++) {

        repeatedString += words;    
    }
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
