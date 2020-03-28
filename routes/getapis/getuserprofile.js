const express = require('express')
const router = express.Router()
const Userdetails =require('../../models/userSchema')

    
router.get('/:Username', getUser, (req, res) => { 
    res.json(res.required__object)
  })
  

  // Middleware function for gettig userobject by ID
async function getUser(req, res, next) {
    try {
     
      required__object= await Userdetails.find({"Username":req.params.Username})
      console.log("--------------------------------------------------------------------------------------------------")
      console.log(required__object)
      if (required__object == null) {
        return res.status(404).json({ message: 'Cant find user  '})
      }

    } catch(err){
      return res.status(500).json({ message: err.message })
    }
    
    res.required__object = required__object
    next()
  } 
  module.exports = router 
