var arr = [5, 7, [4, [2], 8, [1, 3], 2],
    [9, []], 1, 8,
];
var sum = 0;

function toCount(arra) {
    for (let i = 0; i < arra.length; i++) {
        if (typeof (arra[i]) === 'object') {
            //object
            toCount(arra[i]);
        } else {
            //number
            if (typeof (arra[i]) !== 'number') {
                console.log('NO');
                sum += parseInt(arra[i]);
                console.log('15' + arra[i]);
            } else {
                sum += arra[i];
            }

        }

    }
}
toCount(arr);
console.log(sum);