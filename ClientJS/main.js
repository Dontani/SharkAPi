async function apiRequest(){
    const sharkName = document.querySelector('input'),value
    try {
        const response = await fetch (`https://don-shark-api.herokuapp.com/api/${sharkName}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('h2').innerText = data.enviornment
    }catch(error){
        console.log(error)
    }
}