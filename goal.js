var goal = getCookie("goal");
document.cookie = setCookie("goal", goal);

function disp()
{
if (getCookie("goal") == 0)
{
    document.getElementById("goalDisplay").innerHTML = "-";
}
}

document.getElementById("goalDisplay").innerHTML = goal;

function setGoal()
{
    let g = prompt("Enter your goal in ounces (oz)");
    if (g != null)
    {
        goal = g;
        setCookie("goal", goal);
        document.getElementById("goalDisplay").innerHTML = goal;
    }
}