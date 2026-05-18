function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    var msg = "Remember to stay hydrated! You've had " + getOzDrank() + " ounces so far today!";
    const notification = new Notification(msg);
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification(msg);
        // …
      }
    });
  }
}

function notifyTime() {
    let now = new Date();
    let time = now.getTime();
    let yest = new Date(now.getFullYear(),now.getMonth(),(now.getDate() - 1),12,0,0);
    let egg = true;
    time = time - yest.getTime();
    time = Math.round((time/1000)/60)/60;
    let rounded = Math.round(time);
    while (egg)
    {
      if (time % rounded != 0)
        {
          notifyMe();
        }
      notifyTime();
    }
}