const express= require("express");
const app =express();
const https=require("https");
const bodyParser= require("body-parser");
const ejs =require("ejs");
const fetch=require("node-fetch"); 
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set('view engine','ejs');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const time = new Date();
    
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    currentTime =  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    currentDate= days[day] + ', ' + date+ ' ' + months[month]
app.get("/",function(req,res){
    const time = new Date();
    
   currentDate= days[day] + ', ' + date+ ' ' + months[month]
const sendData ={day:days[day],day1 :days[(day+1)%7],day2 :days[(day+2)%7],day3 :days[(day+3)%7],day4 :days[(day+4)%7],
    day5 :days[(day+5)%7],day6 :days[(day+6)%7],Min_Temp:"21 ",Max_Temp:" 25",imageurl:"https://openweathermap.org/img/wn/02d@2x.png",icon:"04",
    location :"Varanasi",country:"India",temp:"23",todaydate:currentDate,currenttime:currentTime,desc:" ",feel:" ",humidity:"60 ",speed:" 5",pressure:" 1000" };
res.render("home",{sendData:sendData});


})





app.post("/", async (req,res) =>{
    const query= await req.body.cityname;
   const apikey="cf3425fa7a56ad2cea059a2cd060af3f";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+apikey+"&units=metric";
const response=await fetch(url);
const weatherdata= await response.json();
const temp=weatherdata.main.temp;
const Min_temp=weatherdata.main.temp_min;
const Max_temp=weatherdata.main.temp_max;
const desp=weatherdata.weather[0].description;
const icon= weatherdata.weather[0].icon;
const imageurl="https://openweathermap.org/img/wn/"+icon+"@2x.png"
const sendData={};
sendData.temp=temp;
sendData.Min_Temp=Min_temp;
sendData.Max_Temp=Max_temp;
sendData.desp=desp;
sendData.imageurl=imageurl;
sendData.icon=icon;
sendData.location=query;
sendData.feel=weatherdata.main.feels_like;
sendData.humidity=weatherdata.main.humidity;
sendData.speed=weatherdata.wind.speed;
sendData.pressure=weatherdata.main.pressure;
sendData.country=weatherdata.sys.country;
sendData.todaydate=currentDate;
sendData.currenttime=currentTime;
sendData.day=days[day];
sendData.day1=days[(day+1)%7];
sendData.day2=days[(day+2)%7];
sendData.day3=days[(day+3)%7];
sendData.day4=days[(day+4)%7];
sendData.day5=days[(day+5)%7];
sendData.day6=days[(day+6)%7];
res.render("home",{sendData:sendData});
})



app.listen(3000,function(){
    console.log("server started");
})