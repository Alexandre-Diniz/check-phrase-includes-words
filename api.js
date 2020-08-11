import verify from './verify'

export default function(data,index){
  return data.filter(item => {
    return verify(item[title], value)
  })
}
