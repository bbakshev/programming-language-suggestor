function handleCompletedForm(event) {
  event.preventDefault();

  let python = document.getElementById("python");
  python.setAttribute("class", "hidden");
  let javas = document.getElementById("javas");
  javas.setAttribute("class", "hidden");
  let ruby = document.getElementById("ruby");
  ruby.setAttribute("class", "hidden");
  let notFromList = document.getElementById("notfromlist");
  notFromList.setAttribute("class", "hidden");

  const rhinoSelection = document.querySelector('input[id="animal1"]:checked').value;
  const snakeSelection = document.querySelector('input[id="animal2"]:checked').value;
  const foxSelection = document.querySelector('input[id="animal3"]:checked').value;

  if (rhinoSelection.checked == true){
    javas.removeAttribute("class");
  } 
  if (snakeSelection.checked == true){
    python.removeAttribute("class");
  } 
  if (foxSelection.checked == true){
    ruby.removeAttribute("class");
  }
}
window.addEventListener("load", function () {
  document.getElementById("complete-form").addEventListener("submit", handleCompletedForm);
});