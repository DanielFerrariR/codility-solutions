const solution = (startPosition, endPosition, jumpDistance) => {
  return Math.ceil((endPosition - startPosition) / jumpDistance)
}

console.log(solution(process.argv[2]))
