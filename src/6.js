const solution = (array) => {
  let sumAllElements = 0
  let minDifference = Number.MAX_SAFE_INTEGER
  let currentDifference = Number.MAX_SAFE_INTEGER
  let sumFirstPart = 0
  let sumSecondPart = 0

  for (const each of array) {
    sumAllElements += each
  }

  for (let part = 0; part < array.length - 1; part += 1) {
    sumFirstPart += array[part]
    sumSecondPart = sumAllElements - sumFirstPart
    currentDifference = Math.abs(sumFirstPart - sumSecondPart)
    minDifference = Math.min(currentDifference, minDifference)
  }

  return minDifference
}

console.log(solution(process.argv[2]))
