function checkPhraseIncludesWords(phrase, words) {
  const contain = words.split(' ').map(word => {
    if (phrase.toLowerCase().includes(word)) {
      return true
    } else return false
  })
  return contain.every(item => item === true)
}

async function getDataFilteredByWords(value) {
  return data.filter(item => {
    return checkPhraseIncludesWords(item.title, value)
  })
}
