function callbackFunction(){
  console.log("calling back now!")
}

const milliseconds = 1000
setTimeout(callbackFunction, milliseconds)


async function fetchUser() {
    const response = await fetch('user-api-url');
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    return await response.json();
}

async function fetchLocationForUser(user) {
    const response = await fetch(`location-api-url/${user.id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch location data');
    }
    return await response.json();
}

async function fetchServerForLocation(location) {
    const response = await fetch(`server-api-url/${location.id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch server data');
    }
    return await response.json();
}

(async () => {
    try {
        const user = await fetchUser();
        const location = await fetchLocationForUser(user);
        const server = await fetchServerForLocation(location);
        console.log(`The server is ${server}`);
    } catch (error) {
        console.error('Error:', error);
    }
})();

