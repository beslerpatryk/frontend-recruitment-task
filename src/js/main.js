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

function resetNumOfClicks(){
    clickCounter = 0;
    numOfClicks.innerHTML = clickCounter;
}

contentBtn.addEventListener("click", () => {
    count();
    showModal();
})

closeBtn.addEventListener("click", () => {
    closeModal();
})

resetBtn.addEventListener("click", () => {
    resetNumOfClicks()
})

