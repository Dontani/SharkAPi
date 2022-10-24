const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')
app.use(cors())
const sharks = {
    'great white shark':{ 
    'size':'11-16 ft',
    'enviornment':' coastal waters',
    'deaths by this shark':'52'
},
'tiger shark':{ 
    'size':'10-14 ft',
    'enviornment':'tropical waters',
    'deaths by this shark':'32'
},
'hammerhead shark':{ 
    'size':'12-18 ft',
    'enviornment':'tropical coastal waters',
    'deaths by this shark':'0'
},
'sand shark':{ 
    'size':'7-15 ft',
    'enviornment':'tropical coastal waters',
    'deaths by ,this shark':'0'
},
'default shark':{ 
    'size':'Big Boi',
    'enviornment':'water',
    'deaths by this shark':'0'
}
}
app.get('/',(request,response)=>{
response.sendFile(__dirname + '/index.html')
})
app.get('/api/:sharkName', (request,response)=>{
const sharkName = request.params.sharkName.toLowerCase()
   if (sharks[sharkName]) { 
response.json(sharks[sharkName])
}else{ 
    response.json(sharks['default shark'])
}
})
app.listen(process.env.PORT||PORT,()=>{
    console.log(`The server is running on port ${PORT}!`)
})