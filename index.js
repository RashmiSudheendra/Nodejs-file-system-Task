const http=require('http')
const fs=require('fs')
const express=require('express')
const app=express()
const port = 4000

fs.mkdir("./FileSystemTask", () => 
    {
        console.log('please reload the browser to create file in this folder !!')
    });


    const server=http.createServer((req, res)=>{
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
    
    fs.writeFileSync(`./FileSystemTask/${str}.txt`,`current Date & Time : ${now}`,'utf-8')
    let data = fs.readFileSync(`./FileSystemTask/${str}.txt`,'utf-8')
    res.writeHead(200, {'content-type':'text/html'})
    res.end(data) 
    })


server.listen(port,()=>{
    console.log("App is listening to "+port)
})
