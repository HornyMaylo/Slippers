const deadline = '2023-09-21'

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / 1000 / 60) % 60),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24)

  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return '0' + num
  } else {
    return num
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock, 1000)

  updateClock()

  function updateClock() {
    const t = getTimeRemaining(endtime)

    hours.innerHTML = getZero(t.hours)
    minutes.innerHTML = getZero(t.minutes)
    seconds.innerHTML = getZero(t.seconds)

    if (t.total <= 0) {
      clearInterval(timeInterval)
    }
  }
}

setClock('.timer', deadline)

//   const t = Date.parse(deadline) - Date.parse(new Date()),
//     days = Math.floor(t / (1000 * 60 * 60 * 24)),
//     seconds = Math.floor((t / 1000) % 60),
//     minutes = Math.floor((t / 1000 / 60) % 60),
//     hours = Math.floor((t / (1000 * 60 * 60)) % 24)
// console.log(days)
// console.log(seconds)
// console.log(minutes)
// console.log(hours)
