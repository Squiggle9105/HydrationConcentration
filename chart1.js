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
else if (todayDate.getDay == 1)
{
    ereyesterday = 'Saturday';
}
else
{
    ereyesterday = 'Friday';
}

function getTodayLabel()
{
  return today;
}

// fill in values of the graph
const xValues = [ereyesterday, yesterday, today];
const yValues = [0,0,ozDrank];
const barColors = ['#347', "#399","#876"];

// creates chart (Chart.js)
const ctx = document.getElementById("waterBar");

const barChart = new Chart(ctx, {type: "bar", data: {labels: xValues, datasets: [{backgroundColor: barColors,data: yValues}]},options: 
  {plugins: {legend: {display: false},title: {display: true,text: "Ounces per day",font: {family:'Verdana',size: 16,},}}}});

function addData(chart, label, newData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    chart.update();
}
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}
