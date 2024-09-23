const repeat = (s, n) => s.split('').map(ss => ss.repeat(n)).join('')

console.log(repeat('a', 3))
console.log(repeat('hoge', 2))