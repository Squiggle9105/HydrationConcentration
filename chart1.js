// today's date (Date.js)
const todayDate = new Date();

// list of days of the week by name
const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// array that will store oz drank per day
var dailyOz = [0,0,0,0,0,0,0];

// today as a String
var today = weekDays[todayDate.getDay()];

// will hold yesterday as a String
var yesterday = null;

// will hold the day before yesterday (or ereyesterday) as a String
var ereyesterday = null;

// base cookie for ozDrank today

document.cookie = "username=todayOz=0; path=/";

// will store oz drank in one day
var ozDrank = getCookieValue("todayOz"); 

// if today isn't Sunday, yesterday is one spot backward in the array. If today is Sunday, yesterday is at the end of the array.
if (todayDate.getDay() > 0)
{
    yesterday = weekDays[todayDate.getDay()-1];
}
else
{
    yesterday = 'Saturday';
}

// if today is at least Tuesday, the day before yesterday is two spots backward in the array. If today is Monday, it is at the end of the array, and if today is Sunday, it is two spots backward.
if (todayDate.getDay() > 1)
{
    ereyesterday = weekDays[todayDate.getDay()-2];
}
else if (todayDate.getDay = 1)
{
    ereyesterday = 'Saturday';
}
else
{
    ereyesterday = 'Friday';
}

// fill in values of the graph
const xValues = [ereyesterday, yesterday, today];
const yValues = [64,72,ozDrank];
const barColors = ['#347', "#399","#876"];

// creates chart (Chart.js)
const ctx = document.getElementById('waterBar');

new Chart (ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {display: false},
      title: {
        display: true,
        text: "Ounces per day",
        font: 
        {
          family:'Verdana',
          size: 16,
        },
      }
    }
  }
});

//reloads chart
function load()
{
  Chart.resetChart();
}

//sets cookie to specific name and value
// used to help: w3schools
function setCookie(name,val){
  const d = new Date();
  d.setTime = (d.getTime + (4*24*60*60*1000))
  let exDate = d.getUTCDate();
  document.cookie = "username=" + name + "=" + val + ";" + "expires=" + exDate +";" + "path=/";
}
// retrieves cookie if it exists 
// used to help: w3schools
function getCookie(name)
{
  let cookieStr = decodeURIComponent(document.cookie);
  let splitStr = cookieStr.split(";");
  for (i = 0; i < splitStr.length(); i++)
  {
    if (splitStr.substring(i,i+name.length()).equals(name))
    {
      return splitStr.substring(i,i+name.length());
    }
  }
  return "";
}
function getCookieValue(name)
{
  let returnVal = getCookie(name);
  let intVal = returnVal.parseInt();
  return intVal;

}
//sets ozDrank to 0
function clearOz(){
  ozDrank = 0;
  setCookie("todayOz",ozDrank);
}

// will add 4 to ozDrank if button is pressed
function oz4(){
  ozDrank = ozDrank + 4;
  setCookie("todayOz",ozDrank);
  alert(ozDrank);
}

// will add 8 to ozDrank if button is pressed
function oz8(){
  ozDrank = ozDrank + 8;
  setCookie("todayOz",ozDrank);
  alert(ozDrank);
}

// will add 16 to ozDrank if button is pressed
function oz16(){
  ozDrank = ozDrank + 16;
  setCookie("todayOz",ozDrank);
  alert(ozDrank);
}

// will add 32 to ozDrank if button is pressed
function oz32(){
  ozDrank = ozDrank + 32;
  setCookie("todayOz",ozDrank);
  alert(ozDrank);
}
