function mumble(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            result += str[i].toUpperCase();
        } else if (i !== 0) {
            result += "-" + str[i].toUpperCase();
            result += str[i].toLowerCase().repeat(i);
        }
    }
    return result;
};

console.log(mumble("Adam"));