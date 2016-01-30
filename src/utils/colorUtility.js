export default (hex, opacity) => {
  let splitHex = hex.split('#')[1].match(/.{2}/g).map(h => {
    return parseInt(h, 16)
  })
  console.log(splitHex)
  return `rgba(${splitHex[0]}, ${splitHex[1]}, ${splitHex[2]}, ${opacity})`
}
