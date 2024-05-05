var icon = document.getElementById("icon");
var title = document.getElementById("title");
icon.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
    title.innerHTML = "Dark Mode";
   
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
    title.innerHTML = "Light Mode";
   
  }
});
