const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs")
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home',(req,res)=>{
  res.render("index")
})
app.get('/login/:username',(req,res)=>{
    res.send(`hi ${req.params.username}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})