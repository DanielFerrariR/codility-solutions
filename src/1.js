const solution = (number) => {
  const binarySequence = number.toString(2).split('')
  let gap = 0
  let gapStart = false
  let biggestGap = 0

  binarySequence.forEach((each, index) => {
    if (each === '0' && binarySequence[index - 1] === '1') {
      gapStart = true
      gap += 1
      return
    }
    if (each === '0' && gapStart === true) {
      gap += 1
      return
    }
    biggestGap = gap > biggestGap ? gap : biggestGap
    gap = 0
    gapStart = false
  })

  return biggestGap
}

console.log(solution(process.argv[2]))
