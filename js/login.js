const checkEmail = document.getElementById("check-email");
const checkPass = document.getElementById("check-pass");
const signInBtn = document.getElementById("signin-btn");
const err = document.getElementById("err")
function inValidate() {
    if (!checkEmail.value) {
      checkEmail.style.outlineColor = "red";
      checkEmail.focus();
      return;
    }
    if (!checkPass.value) {
      checkPass.style.outlineColor = "red";
      checkPass.focus();
      return;
    }

  }

  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inValidate();

    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    let is = false;

    if (data.length) {
        data.forEach(user => {
            if (user.email === checkEmail.value && user.password === checkPass.value) {
                is = true;
                window.location.href = `shaxsiy.html?user=${user.email}`;
                console.log(user.name);
                return; 
            }
        });
    }

    if (!is) {
        err.innerHTML = "That was an invalid email or password. Try again!"
    }
});
