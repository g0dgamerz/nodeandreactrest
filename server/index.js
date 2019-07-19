express = require('express');
const cors = require('cors');
const axios= require('axios');



app= express();
const API_URL = "https://randomuser.me/api"
app.use(express.json())
app.use(cors())

app.get('/',async (req,res)=>{
    const results=req.query.num
    const response = await axios.get(`${API_URL}/?results=${results}`)
    res.json(response.data)
    // detail={
//         "name":"jidesh",
//         "age":23,
//         "address":"saugal",
//         "hobbies":["code ","art ","surf "]
// },
    // detail2={
    //     "name":"romak",
    //     "age":23,
    //     "address":"ccccsdf",
    //     "hobbies":["code","art","surf"]



    // }
    
    // res.json(detail)
    
})

app.listen(4000,function() {console.log("server is running")});