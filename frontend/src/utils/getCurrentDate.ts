export const getCurrentDate = () => {
  const date = new Date()
  const month =
    date.getMonth() + 1 < 10 ? '0' + date.getMonth() : date.getMonth()
  return [date.getFullYear(), month, date.getDate()].join('-')
}
