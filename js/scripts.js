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

  const animalSelection = document.getElementById("animal");

  if (animalSelection.value === "Rhino"){
    javas.removeAttribute("class");
  } else if (animalSelection.value === "Snake") {
    python.removeAttribute("class");
  } else if (animalSelection.value === "Fox"){
    ruby.removeAttribute("class");
  } else {
    notFromList.removeAttribute("class");
  }

}
window.addEventListener("load", function () {
  document.getElementById("complete-form").addEventListener("submit", handleCompletedForm);
});