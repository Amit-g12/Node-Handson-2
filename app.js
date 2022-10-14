const express = require('express');

const App =  express();

App.get('/',(req,res)=>{
    // res.send(res)
    // res.send('Hello')
    res.send('Amit Kumar')
})

App.get('/About', (req, res) => {
    // res.send(res)
    // res.send('Hello')
    res.send('Amit');
})


App.listen('5000',(req,res)=>{
    console.log(req)
})