document.getElementById("min-btn").addEventListener("click", function(e) {
  var window = remote.getCurrentWindow();
  window.minimize();
});


document.getElementById("close-btn").addEventListener("click", function(e) {
  var window = remote.getCurrentWindow();

  window.close();
});
