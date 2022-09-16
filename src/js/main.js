const contentBtn = document.getElementById("content-btn");
const resetBtn = document.getElementById("reset-btn");
const closeBtn = document.getElementById("close-btn");
const numOfClicks = document.getElementById("num-of-clicks");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const modalBg = document.querySelector(".modal-background");

let clickCounter = localStorage.getItem("clickCounter") || 0;

function count() {
	clickCounter++;
    if(clickCounter == 1){
	    numOfClicks.innerHTML = clickCounter + " time ";
    }else if(clickCounter >= 5){
	    resetBtn.classList.add("active");
	    numOfClicks.innerHTML = clickCounter + " times ";
    }else{
	    numOfClicks.innerHTML = clickCounter + " times ";
    }
	localStorage.setItem("clickCounter", clickCounter);
}

function showModal() {
	modal.classList.toggle("active");
	modalBg.classList.toggle("active");
}

function closeModal() {
	modal.classList.toggle("active");
	modalBg.classList.toggle("active");
}

function resetNumOfClicks() {
	clickCounter = 0;
	numOfClicks.innerHTML = clickCounter + " times ";
	resetBtn.classList.remove("active");
}

contentBtn.addEventListener("click", () => {
	count();
	showModal();
});

closeBtn.addEventListener("click", () => {
	closeModal();
});

resetBtn.addEventListener("click", () => {
	resetNumOfClicks();
});
