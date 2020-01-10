const h1Click = document.getElementById("h1Click")
h1Click.addEventListener("click", myFunction)

function myFunction(event) {
  h1Click.style.color = "green"
  console.log(event);
  
}