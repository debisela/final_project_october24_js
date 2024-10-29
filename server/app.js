const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// const {db} = require('./config/db.js')
const userRouter = require('./routes/userRoute.js')
const adminRouter = require('./routes/adminRoute.js')
const attendeeRouter = require('./routes/attendeeRoute.js')

const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/attendee', attendeeRouter)


const PORT = process.env.PORT || 3200
app.listen(PORT, ()=>{
    console.log(`run on ${PORT}`);
})



//check if connected to db: receive in cosole the version of db
// async function testConnection(){
// try {
//     const data = await db.raw('select version()');
//     console.log(data.rows);
    
// } catch (error) {
//     console.log(error);
    
// }
// }
// testConnection()