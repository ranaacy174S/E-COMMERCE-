const click = document.getElementById("open");
const popup = document.getElementById("container");
const close = document.getElementById("close");

click.addEventListener('click',insideit);

function insideit(e){
    e.preventDefault();
  popup.classList.add("active");
}


close.addEventListener("click", () => {
    container.classList.remove("active");
});