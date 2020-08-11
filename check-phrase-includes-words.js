const verify = (phrase, words) => {
  const contain = words.split(' ').map(word => {
    if (phrase.toLowerCase().includes(word)) {
      return true
    } else return false
  })
  return contain.every(item => item === true)
}
export default verify
