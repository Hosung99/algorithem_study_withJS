const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

function roomNumber() {
    let digit = new Array(10).fill(0);

    for (let i = 0; i < input.length; i++) {
      digit[input[i]]++;
    }
    let sixNineNumber = Math.ceil((digit[6] + digit[9]) / 2);
    digit[6] = sixNineNumber;
    digit[9] = sixNineNumber;
    return Math.max(...digit);
}

console.log(roomNumber());
