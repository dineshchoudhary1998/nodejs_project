const express = require('express')
const router = express.Router()
const Vendordetails =require('../../models/vendorSchema')




router.get('/:id', getVendor, (req, res) => {
    console.log(res.required__object.Videos.Reviews) 
    res.json(res.required__object.Videos.Reviews)
  })
  

  // Middleware function for gettig vendor object by ID
async function getVendor(req, res, next) {
    try {
     
      vendor_object= await Vendordetails.find({})
      var required__object
      vendor_object.map(vendor=>{
          if(vendor.Videos.id==req.params.id)
          {
            required__object=vendor
          }
      })
      console.log("--------------------------------------------------------------------------------------------------")
      console.log(required__object)
      if (required__object == null) {
        return res.status(404).json({ message: 'Cant find vendor'})
      }

    } catch(err){
      return res.status(500).json({ message: err.message })
    }
    
    res.required__object = required__object
    next()
  } 

  module.exports = router 
