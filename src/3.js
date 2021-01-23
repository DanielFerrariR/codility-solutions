const solution = (array) => {
  const unpairedElement = {}

  for (const each of array) {
    if (unpairedElement[each]) {
      delete unpairedElement[each]
    } else {
      unpairedElement[each] = true
    }
  }

  return Number(Object.keys(unpairedElement)[0])
}

console.log(solution(process.argv[2]))
