// SET COUNTDOWN to 14 DAYS from NOW
const remainingDays = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);
// 14 * 24 * 60 * 60 * 1000
setInterval(() => {
  const now = new Date();
  const countdown = Math.ceil((remainingDays - now) / 1000);

  //Stop at 0
  if (countdown >= 0) {
    flipAllCards(countdown);
  }
}, 1000);

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor((time / 60) % 60);
  const hours = Math.floor(time / 3600) % 24;
  const days = time / 86400;

  const day = document.querySelector("[data-day]");
  const hour = document.querySelector("[data-hour]");
  const mins = document.querySelector("[data-mins]");
  const secs = document.querySelector("[data-seconds]");

  flip(day, Math.floor(days));
  flip(hour, Math.floor(hours));
  flip(mins, Math.floor(minutes));
  flip(secs, seconds);
}

function flip(flipCard, newNumber) {
  const topNum = flipCard.querySelector(".top");
  const startNumber = parseInt(topNum.textContent);

  if (newNumber === startNumber) return;

  newNumber = newNumber < 10 ? "0" + newNumber : newNumber;


  const bottomNum = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  topNum.textContent = startNumber;
  bottomNum.textContent = startNumber;

  
  topFlip.textContent = startNumber < 10 ? "0" + startNumber : startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topNum.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", (e) => {
    bottomNum.textContent = newNumber;
    bottomFlip.remove();
  });

  flipCard.append(topFlip, bottomFlip);
}
