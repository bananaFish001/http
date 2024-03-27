const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getRandomBool()) {
      resolve("resolved!")
    } else {
      reject("rejected!")
    }
  }, 1000)
})

function getRandomBool(){
  return Math.random() < .5
}

