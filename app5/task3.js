const obj = {
    iodsuf: {
        asd: 1,
        zxc: {
            khvxc: {
                ncxvm: 10,
            }
        },
        qwd: 3,
    },
    gerg: {
        joij: {
            shdjk: 99
        },
        kjn: 5,
        iyu: 6,
    },
    xcnkv: {
        oirje: 7,
        iuhdv: 8,
        nmbb: 9,
    },
}

//  Найдите сумму всех чисел, приведенного объекта.
function sumFunc(obj) {
    let sum = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            sum = sum + obj[key];
        } else {
            sum += sumFunc(obj[key]);
        }
    }
    return sum;
}

console.log(sumFunc(obj));