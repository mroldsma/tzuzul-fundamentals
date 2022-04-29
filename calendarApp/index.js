//requiring modules
const express = require('express')
const path = require('path')


// server initialization
const app = express()

// setings
const PORT= 4000

//middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, 'static', 'index.html')))


// routes
const users = require('./routes/users.routes')
app.use(users)


// server listening
app.listen(4000, ()=>{
  console.log('listening on http://localhost:'+PORT)
})



/*

- pensar en cuales serian las rutas
-

*/