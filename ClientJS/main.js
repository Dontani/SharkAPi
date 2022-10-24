async function apiRequest(){
    const sharkName = document.querySelector('input'),value
    try {
        const response = await fetch (`https://git.heroku.com/don-shark-api.git/api/${sharkName}`)
    }
}