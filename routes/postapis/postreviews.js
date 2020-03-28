const express = require('express')
const router = express.Router();
const Vendor = require('../../models/vendorSchema');


router.patch('/:id', getVendor, async (req, res) => {
  
    console.log(res.required__object.Videos.Reviews)
    res.required__object.Videos.Reviews.unshift({
        "User_id":"Dinesh122345",
        "Review":"Hello world"
    })
  
    try {   
      const updatedReview = await res.required__object.save()
      res.json(updatedReview)
    } catch(err) {
      res.status(400).json({ message: err.message })
    }
  
  })

// Middleware function for gettig vendor object by ID
async function getVendor(req, res, next) {
    try {
     
      vendor_object= await Vendor.find({})
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