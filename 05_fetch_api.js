async function main(){
  async function fetchIPAddress(domain) {
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
      headers: {
        'accept': 'application/dns-json'
      }
    })
    const respObject = await resp.json()

    // console.log(respObject)
    return respObject.Answer[0].data
  }


  const domain = 'api.boot.dev'
  const ipAddress = await fetchIPAddress(domain)


  if(!ipAddress) {
    console.log('something went wrong in fetchIPAddress')
  }else{
    console.log(`found IP Address for domain ${domain}: ${ipAddress}`)
  }
}

main();
