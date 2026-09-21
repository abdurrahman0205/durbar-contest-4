function truncateString(str, maxLength) {
 
  if ( !Number.isInteger(maxLength) || maxLength < 0 || typeof str !== 'string') {
    return 'Invalid'
  }
  if (maxLength <= 3) {
    return '...'
  }

  if (str.length <= maxLength) {
    return str
  } else {
    return str.slice(0, maxLength - 3) + '...'
  }

}


let str = "Hello world, this is a long string"
let maxLength = 10
console.log(truncateString(str, maxLength));