const title= document.getElementById("title");
const button= document.getElementById("changebtn");
button.addEventListener("click", function(){
	title.textContent="button clicked!";
	title.style.color="red";
});