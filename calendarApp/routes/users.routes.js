const router = require('express').Router();

router.get('/', (req,res)=>{
  return res.json({ruta: "index"})
})

router.get('/login', (req,res)=>{
  return res.json({ruta: "login"})
})

router.get('/signup', (req,res)=>{
  return res.json({ruta: "sign up"})
})


module.exports = router