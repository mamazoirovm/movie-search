const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const container = document.getElementById("container");
const signUpBtn = document.getElementById("signup-btn");
const name = document.getElementById("name-input");
const email = document.getElementById("email-input");
const password = document.getElementById("password-input");
const repassword = document.getElementById("repassword-input");


signUp.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("right-panel-active");
});



function check(email) {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
}

function validate() {
  if (!name.value.trim()) {
    name.style.outlineColor = "red";
    name.focus();
    return;
  }
  if (!check(email.value)) {
    email.style.outlineColor = "red";
    email.focus();
    email.value = "";
    return;
  }
  if (!email.value) {
    email.style.outlineColor = "red";
    email.focus();
    return;
  }

  if (!password.value) {
    password.style.outlineColor = "red";
    password.focus();
    return;
  }
  const passwordIn = password.value.trim();
  if (passwordIn.length !== 6) {
    password.style.outlineColor = "red";
	password.placeholder = "maximum 6 characters"
    password.focus();
    password.value = "";
    return;
  }

  if (!repassword.value) {
    repassword.style.outlineColor = "red";
    repassword.focus();
    return;
  }
  if (repassword.value != password.value) {
    repassword.style.outlineColor = "red";
    repassword.focus();
    return;
  }
}


function dataAnalys() {
  let user = {};
  user.name = name.value;
  user.email = email.value;
  user.password = password.value;
  user.repassword = repassword.value;

let data = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

  if (data.length) {
    data.forEach((el) => {
      if (el.name == user.name && el.email == user.email && el.password == user.password && el.repassword == user.repassword) {
        alert("succes")
		return
      }
    });
  }
  data.push(user)
  localStorage.setItem('users', JSON.stringify(data))

}

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
  dataAnalys();

  if (!validate()) {
	
  }
 
});

