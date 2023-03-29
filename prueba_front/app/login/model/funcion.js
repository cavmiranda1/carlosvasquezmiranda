document.getElementById("eyeshow").addEventListener("click", function() {
  var x = document.getElementById("pass");
  var btn = document.getElementById("eyeshow");
  if (x.type === "password") {
  	btn.innerHTML = '<i class="fas fa-eye-slash"></i>'
    x.type = "text";
  } else {
  	btn.innerHTML = '<i class="fas fa-eye"></i>'
    x.type = "password";
  } // End if
})