const { Router } = require("express");
const axios = require("axios");
const userModel = require("../model/usermodel");

const userController = Router();

userController.get("/fetchuser", async (req, res) => {

    try{ 
        let Result = await axios.get('https://randomuser.me/api/?results=50')
        Result = Result.data.results
        let user_data = []
         Result.map( (el) => {
            // console.log(el)
            var obj = {
              gender: el.gender,
              name: el.name,
              location: el.location,
              email: el.email,
              dob: el.dob,
            };
            // console.log(obj)
            
            
    
            user_data.push(obj);
        }
    )
    // console.log(user_data); 
    // console.log(Result)
    const users =  userModel;
    await users.insertMany(user_data)

        res.send('Data Added Successfully')
    }
    catch(err){
        console.log(err)
    }


});


userController.get('/delete', async(req,res)=>{
    try{
       let prd = await  userModel.deleteMany({})
       
       res.send(prd)

    }
    catch(err){
        console.log(err)
    }
})


userController.get('/userdetail', async (req,res)=>{

    try{
        console.log(req.query)
        let { page } = req.query
        let response = await userModel.find().skip(page * 10).limit(10)
        // count = count + 10
        res.send(response)

    }
    catch(err){
        console.log(err)
    }

})

module.exports = userController;
