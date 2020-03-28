const express = require('express')
const router = express.Router()
const Userdetails =require('../../models/userSchema')

// Creating one user
router.post('/', async (req, res) => {
    const userdetails = new Userdetails(req.body)
  
    try {
      const newuser = await userdetails.save()
      res.status(201).json(newuser)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

module.exports = router 
  