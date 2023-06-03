const targetDiv = document.getElementById("dropdown-content");
const btn = document.getElementById("dropbtn");
btn.onclick = function () {
  if (targetDiv.style.display != "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};