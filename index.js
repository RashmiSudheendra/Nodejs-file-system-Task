const express = require("express")
const app = express()
const port = 4000
const fs = require('fs')  

fs.mkdir("C:/Users/Admin/desktop/FileSystemTask", () => 
    {
        console.log('please reload the browser to create file in this folder !!')
    });

app.get('/',(req,res)=>{
    const now = new Date();
    //getting proper date
    const currentdate = JSON.stringify(new Date());
    console.log(currentdate)
    const name = JSON.parse(currentdate)
    // console.log(name)
    date= name.split("T")
    date.splice(1,1);
    date = date.join('');
    // getting proper time
    const currentHour = now.getHours()
    const currentMin = now.getMinutes()
    const currentSec = now.getSeconds()
    let currentTime = [currentHour,currentMin,currentSec]
    let time = currentTime.join("'")
    // console.log(time)
    //concatinating date and time to create folder with naming convention (i.e, without space and colon and few special character)
    str1 = [date,time]
    str = str1.join("_")
    // console.log(str)
    
    fs.writeFileSync(`C:/Users/Admin/desktop/FileSystemTask/${str}.txt`,`current Date & Time : ${now}`,'utf-8')
    let data = fs.readFileSync(`C:/Users/Admin/desktop/FileSystemTask/${str}.txt`,'utf-8')
    res.send(data) 
})


app.listen(port,()=>{
    console.log("App is listening to "+port)
})