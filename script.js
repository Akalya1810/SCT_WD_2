let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let lapCounter = 1;

function startStopwatch() {
  clearInterval(interval);
  interval = setInterval(updateTime, 10);
}

function stopStopwatch() {
  clearInterval(interval);
}

function resetStopwatch() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  lapCounter = 1;
  displayTime();
  document.getElementById("lapList").innerHTML = ""; // Clear lap list
}

function updateTime() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  displayTime();
}

function displayTime() {
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
  document.getElementById("milliseconds").textContent = formatTime(milliseconds);
}

function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}

// 🏁 Record Lap Function
function recordLap() {
  const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapCounter++} – ${lapTime}`;
  document.getElementById("lapList").appendChild(lapItem);
}
