//requiring modules
const express = require('express')
const path = require('path')

// server initialization
const app = express()
//port
const PORT= 4000



// routes
app.get('/', (req,res)=>{
  return res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

// server listening
app.listen(4000, ()=>{
  console.log('listening on http://localhost:'+PORT)
})