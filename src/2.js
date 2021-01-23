function solution(array, times) {
  if (!array.some((each) => each)) {
    return array
  }

  const newArray = [...array]

  for (let count = 0; count < times; count += 1) {
    const lastElement = newArray.pop()
    newArray.unshift(lastElement)
  }

  return newArray
}

console.log(solution(process.argv[2]))
