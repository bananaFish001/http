async function main(){

  async function getItemData(){
    const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', getSettings())
    return response.json()
  }

  
  const items = await getItemData()

  logItems(items)

  function getSettings(){
    return{
      method: 'GET',
      mode: 'cors',
      headers: {
        'X-API-KEY': 'Testing',
        'Content-Type': 'application/json'
      }
    }
  }


  function logItems(items){
    for(const item of items){
      console.log(item.name)
    }
  }
}

main();
