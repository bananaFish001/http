const setTimeMS = 100
const callback = () => {
  console.log(`I print second`);
}
console.log(`I print first`);

setTimeout(callback, setTimeMS)

console.log(`I print third`);

await sleep (setTimeMS + 5)

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}
