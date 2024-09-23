const threedigits = (nums) => nums.filter(n => 100 <= n && n < 1000)

console.log(threedigits([...Array(20)].map((n, i) => i * 75)))