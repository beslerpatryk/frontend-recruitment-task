const contentBtn = document.getElementById("content-btn");
const resetBtn = document.getElementById("reset-btn");
const closeBtn = document.getElementById("close-btn");
const numOfClicks = document.getElementById("num-of-clicks");
const modal = document.querySelector(".modal")


let clickCounter = localStorage.getItem("clickCounter") || 0;

function count(){
    clickCounter++;
    numOfClicks.innerHTML = clickCounter;
    localStorage.setItem("clickCounter", clickCounter);
}

function showModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

contentBtn.addEventListener("click", () => {
    count();
    showModal();
})

closeBtn.addEventListener("click", () => {
    closeModal();
})

resetBtn.addEventListener("click", () => {
    localStorage.clear();
    clickCounter = 0;
    numOfClicks.innerHTML = clickCounter;
})

// const countUp = () => {
//   clickCounter++;
//   countDisplay.innerHTML = clickCounter;
//   localStorage.setItem("clickCounter", clickCounter);
// }

// const openPopUp = () => {
//   popUpWindow.style.display = 'block';
//   popUpCloseBtn.focus();
// }

// const closePopUp = () => {
//   popUpWindow.style.display = 'none';
// }

// const resetCounter = () => {
//   localStorage.clear();
//   clickCounter = 0;
//   countDisplay.innerHTML = clickCounter;
//   closePopUp();
// }

// showBtn.addEventListener("click", () => {
//   countUp();
//   openPopUp();
//   popUpResetBtn.style.display = (clickCounter <= 5) ? 'none' : 'block';
// });

// popUpCloseBtn.addEventListener("click", () => {
//   closePopUp();
// })

// popUpCloseOutside.addEventListener("click", () => {
//   closePopUp();
// })

// popUpResetBtn.addEventListener("click", () => {
//   resetCounter();
// })