const express = require('express');
const cors = require('cors');
const  connection = require('./config/db');
const userController = require('./controller/usercontroller');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('new_cointab_Backend')
})

app.use('/user',userController)


app.listen(7000,async ()=>{
    try{
        await connection;
        console.log('db is connected')
    }
    catch(err){
        console.log(err)
    }
    console.log('listening on 7000')
})