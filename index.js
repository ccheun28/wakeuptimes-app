function handleClick(){
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
  console.log(
    "You will fall sleep at",
    fallAsleepTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    })
  );



  const wakeUpTime = new Date(fallAsleepTime);
  //const wakeUpTimes = [];

  const allCycles = document.getElementById("wakeup-hours-div");
  allCycles.innerHTML = "";

  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    //wakeUpTimes.push(wakeUpTimeString);
    //const thisCycle = document.getElementById("cycle-" + i)
    //thisCycle.textContent = wakeUpTimeString;

    const cycleDiv = document.createElement("div");
    cycleDiv.id = "cycle-"+i;
    cycleDiv.textContent=wakeUpTimeString;

    allCycles.appendChild(cycleDiv);
  }

  //console.log("Wake-up times:", wakeUpTimes.join(", "));
}


const calcBtn = document.getElementById("calc-btn");

console.log(calcBtn);

calcBtn.onclick = handleClick;