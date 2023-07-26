function toReadable(number) {
    let hundredOutput = '';
    let tensOutput = '';
    let onesOutput = '';
    if (number >= 100) {
        const hundredCount = Math.floor(number / 100);
        switch (hundredCount) {
            case 1: hundredOutput = 'one'; break;
            case 2: hundredOutput = 'two'; break;
            case 3: hundredOutput = 'three'; break;
            case 4: hundredOutput = 'four'; break; 
            case 5: hundredOutput = 'five'; break;
            case 6: hundredOutput = 'six'; break;
            case 7: hundredOutput = 'seven'; break;
            case 8: hundredOutput = 'eight'; break;
            case 9: hundredOutput = 'nine'; break;
        }
        hundredOutput += ' hundreed';
        number -= hundredCount*100;
    }
    if (number >= 20) {
        const tenCount = Math.floor(number / 10);
        switch (tenCount) {
            case 2: tensOutput = ' twenty'; break;
            case 3: tensOutput = ' thirty'; break;
            case 4: tensOutput = ' fourty'; break; 
            case 5: tensOutput = ' fifty'; break;
            case 6: tensOutput = ' sixty'; break;
            case 7: tensOutput = ' seventy'; break;
            case 8: tensOutput = ' eighty'; break;
            case 9: tensOutput = ' ninety'; break;
        }
        number -= tenCount*10;
    }
    switch (number) {
        case 1: onesOutput=' one'; break;
        case 2: onesOutput=' two'; break;
        case 3: onesOutput=' three'; break;
        case 4: onesOutput=' four'; break;
        case 5: onesOutput=' five'; break;
        case 6: onesOutput=' six'; break;
        case 7: onesOutput=' seven'; break;
        case 8: onesOutput=' eight'; break;
        case 9: onesOutput=' nine'; break;
        case 10: onesOutput=' ten'; break;
        case 11: onesOutput=' eleven'; break;
        case 12: onesOutput=' twelve'; break;
        case 13: onesOutput=' thirteen'; break;
        case 14: onesOutput=' fourteen'; break;
        case 15: onesOutput=' fifteen'; break;
        case 16: onesOutput=' sixteen'; break;
        case 17: onesOutput=' seventeen'; break;
        case 18: onesOutput=' eighteen'; break;
        case 19: onesOutput=' nineteen'; break;
    }
    return hundredOutput+tensOutput+onesOutput;
}

console.log(toReadable(666));