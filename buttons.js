// will store oz drank in one day
var ozDrank = Number(getCookie("todayOz"));

// base cookie for ozDrank today
document.cookie = setCookie("todayOz",ozDrank);

//sets cookie to specific name and value
//used to help: w3schools
function setCookie(name,val)
{
  const d = new Date();
  d.setTime = (d.getTime + (4*24*60*60*1000))
  let exDate = d.getUTCDate();
  document.cookie = "username=" + name + "=" + val + ";" + "expires=" + exDate +";" + "path=/";
}
// retrieves cookie if it exists 
// used to help: w3schools3
function getCookie(cname) 
{
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArr = decodedCookie.split(';');
  for (i = 0; i < cookieArr.length; i++)
  {
    if(cookieArr[i].indexOf(name) > -1)
    {
      return cookieArr[i].substring(cookieArr[i].indexOf(name)+name.length);
    }
  }
  return 0;
}

//sets ozDrank to 0
function clearOz(){
  ozDrank = 0;
  setCookie("todayOz",ozDrank);
  removeData(barChart);
  addData(barChart,getTodayLabel(),ozDrank);
}

//gets the value of ozDrank
function getOzDrank()
{
    return ozDrank;
}
// will add 4 to ozDrank if button is pressed
function oz4(){
  ozDrank += 4;
  setCookie("todayOz",ozDrank);
  removeData(barChart);
  addData(barChart, getTodayLabel(), ozDrank);
}

// will add 8 to ozDrank if button is pressed
function oz8(){
  ozDrank += 8;
  setCookie("todayOz",ozDrank);
  removeData(barChart);
  addData(barChart, getTodayLabel(), ozDrank);
}

// will add 16 to ozDrank if button is pressed
function oz16(){
  ozDrank += 16;
  setCookie("todayOz",ozDrank);
  removeData(barChart);
  addData(barChart, getTodayLabel(), ozDrank);
}

// will add 32 to ozDrank if button is pressed
function oz32(){
  ozDrank += 32;
  setCookie("todayOz",ozDrank);
  removeData(barChart);
  addData(barChart, getTodayLabel(), ozDrank);
}