require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user_details', { useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

//POST APIS 

const postuserRouter = require('./routes/postapis/postuserdetails')
app.use('/user', postuserRouter)

const postvendorRouter =require('./routes/postapis/postvendordetails')
app.use('/vendor', postvendorRouter)

const postcommentRouter =require('./routes/postapis/postcomments')
app.use('/comment', postcommentRouter)

const postvideoRouter =require('./routes/postapis/postvideos')
app.use('/video', postvideoRouter)


const postreviewRouter =require('./routes/postapis/postreviews')
app.use('/review', postreviewRouter)


const postlikeRouter =require('./routes/postapis/postlikes')
app.use('/like', postlikeRouter)

//----------------Get apis-----------------



const getcommentRouter =require('./routes/getapis/getcomments')
app.use('/getcomment', getcommentRouter)

const getreviewRouter =require('./routes/getapis/getreviews')
app.use('/getreview', getreviewRouter)

const userprofileRouter =require('./routes/getapis/getuserprofile')
app.use('/getuser', userprofileRouter)

const vendorprofileRouter =require('./routes/getapis/getvendorprofile')
app.use('/getvendor', vendorprofileRouter)

const nearmeRouter =require('./routes/getapis/getnearme')
app.use('/nearme', nearmeRouter)

const trendingRouter =require('./routes/getapis/gettrending')
app.use('/trending', trendingRouter)

const exploreRouter =require('./routes/getapis/getexplore')
app.use('/explore', exploreRouter)



app.listen(3000, () => console.log('server started'))