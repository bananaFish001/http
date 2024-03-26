async function main(){

  const craftingCompleteWait = 25
  const combiningMaterialWait = 15
  const smeltingIronBarsWait = 10
  const shapingIronWait = 20

  setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait)
  setTimeout(() => console.log('Combing materials...'), combiningMaterialWait)
  setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait)
  setTimeout(() => console.log('Shaping Iron...'), shapingIronWait)


  console.log('Firing up the forge')

  await sleep(2500)

  function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}


main();
