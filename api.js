import verify from './check-phrase-includes-words'

export default function(data,index){
  return data.filter(item => {
    return verify(item[title], value)
  })
}
