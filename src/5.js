const solution = (A) => {
  const numbers = {}

  for (let count = 1; count < A.length + 2; count += 1) {
    numbers[count] = true
  }

  for (const each of A) {
    delete numbers[each]
  }

  return Number(Object.keys(numbers)[0])
}

console.log(solution(process.argv[2]))
