const App= require('express')();
const cors= require('cors');
const connectDb=require('./connect')
const Router= require('./Routes/placeRouter')
const bodyParser=require('body-parser')
const userRouter= require('./Routes/userRoute')
const cookieParser=require('cookie-parser')
require('dotenv').config()
App.use(cors());
App.use(cookieParser())
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:false}))
App.use('/api/v1',Router)
App.use('/api/v1/user',userRouter)

App.get('/',(req,res)=>{
 res.status(200).json({isWorking:'true'})
})
const start=async()=>{
    try {
        await connectDb(process.env.Mongo_uri)
        console.log('datatbase was connected successfully')
        App.listen(5000,()=>{console.log('server is listening on port 5000')})
    } catch (error) {
        console.log(error)
        App.listen(5000,()=>{console.log('server is listening on port 5000')})

    }
}
start() 