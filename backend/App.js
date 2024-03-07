const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const userrouter = require('./routes/userroutes');
const classrouter = require('./routes/classrouter')
const studentrouter = require('./routes/studentrouter')
const receiptrouter = require('./routes/receiptrouter')
const teacherrouter = require('./routes/teacherrouter')
const examrouter = require('./routes/examrouter')
const login = require('./routes/login')
const ConnectedDB = async () => {
    let db = await mongoose.connect(


        "mongodb+srv://libanabdulahi2024:OZ1NZDQhQAjT43r4@cluster0.zy7osfm.mongodb.net/Student-Project?retryWrites=true&w=majority&appName=Cluster0"
    )
    if (db) {
        console.log('mongoose is Connected !')
    }

}
ConnectedDB()



//middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(cors())
app.use('/user', userrouter)
app.use('/teacher', teacherrouter)
app.use('/class', classrouter)
app.use('/exam', examrouter)
app.use('/student', studentrouter)
app.use('/receipt', receiptrouter)
app.use('/', login)
app.get('/', (req, res) => {

    res.send('Welcome to my Server Backend')

})



app.listen(3000, () => console.log('Connected !'))