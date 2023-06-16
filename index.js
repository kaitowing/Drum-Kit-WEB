
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", handleClick)
});
function handleClick(){
    alert("Click")
}