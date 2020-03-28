const mongoose = require('mongoose')

const likedVideos=new mongoose.Schema({
    video_id:String
})
 
const userDetails=new mongoose.Schema({
        Username:String,
		Location:String,
		User_id:String,
		Password:String,
        Email_id:String,
        liked:likedVideos
		
})

module.exports = mongoose.model('Userdetails', userDetails)