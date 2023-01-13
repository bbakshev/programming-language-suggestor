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

  const trainerSelection = document.getElementById("trainer");
    if (trainerSelection.value === "Ash"){
      pikachu.removeAttribute("class");
    } else if (trainerSelection.value === "Gary"){
      bulbasaur.removeAttribute("class");
    } else if (trainerSelection.value === "Misty"){
      charmander.removeAttribute("class");
    }
  }
window.addEventListener("load", function(){
  document.getElementById("complete-form").addEventListener("submit", handleCompletedForm);
});