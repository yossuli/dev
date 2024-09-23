const check3 = (xs) => xs.every(x => x % 3 === 0) ? 'OK' : 'NG'

console.log(check3([...Array(4)].map((n, i) => i)))
console.log(check3([...Array(4)].map((n, i) => i * 3)))