'use strict';
const express = require('express');
const app = express();

function start (port){
    app.listen(port,()=>{
        console.log(`running on port ${port}`)
    })
}

app.get('/',(req,res)=>{

    res.send('home route')
})

app.get('/data',(req,res)=>{
    res.status(200).send({
        name : 'booony',
        email : 'boonyhasnonuggies.com'
    })
})




module.exports = {
    app: app,
    start: start
}