const carousel = document.querySelector(".carousel");

let isDragging = false;

const dragStart = () => {
    isDragging = true;
    carousel.classList.add("dragging");
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}

const dragstop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragstop);