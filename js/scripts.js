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

  const animalSelection = document.querySelector('input[name="animal"]:checked');
    if (animalSelection){
      python.removeAttribute("class");
    }
  }
window.addEventListener("load", function(){
  document.getElementById("complete-form").addEventListener("submit", handleCompletedForm);
});