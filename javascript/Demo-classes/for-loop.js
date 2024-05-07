// let n = 3;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(' ')
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     process.stdout.write('*')
//   }
//   console.log();
// }

var n = 3;
for (let i = 1; i <= n; i++) {
	let str = '';
	let count = 1;
	for (let j = 1; j <= 2 * n; ++j) {
		if (i + j >= n + 1 && (i >= j - n + 1)) {
			str += count.toString() + ' ';
			count++;
		} else {
			str += ' ';
		}
	}

	console.log(str);
}



var n = 3;
for (let i = n; i >= 1; i--) {
    let str = '';
    let count = 1;
    for (let j = 1; j <= 2 * n; ++j) {
        if (i + j >= n + 1 && (i >= j - n + 1)) {
            str += count.toString() + ' ';
            count++;
        } else {
            str += '  ';
        }
    }
    console.log(str);
};