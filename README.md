# check-phrase-includes-words

## parameter
### phrase: string, required
### words: string, required

This function checks if a set of words belongs entirely to a phrase. If yes, it returns true, otherwise, false.

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
