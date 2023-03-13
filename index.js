const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/
}

const state = {
  name: false,
  lastname: false,
  email: false,
  password: false
}


const validateForm = (e) => {
  switch(e.target.name) {
    case 'name': 
      if(expressions.name.test(e.target.value)) {
        document.getElementById('name').classList.remove('error');
        document.getElementById('img-name').style.display = 'none';
        document.getElementById('error-name').classList.add('unactive');
        state.name = true;

      } else {
        document.getElementById('name').classList.add('error');
        document.getElementById('img-name').style.display = 'block';
        document.getElementById('error-name').classList.remove('unactive');
        state.lastname = false;
      }
    break;
    case 'lastname': 
      if(expressions.lastname.test(e.target.value)) {
        document.getElementById('lastname').classList.remove('error');
        document.getElementById('img-lastname').style.display = 'none';
        document.getElementById('error-lastname').classList.add('unactive');
        state.lastname = true;
      } else {
        document.getElementById('lastname').classList.add('error');
        document.getElementById('img-lastname').style.display = 'block';
        document.getElementById('error-lastname').classList.remove('unactive');
        state.lastname = false;
      }
    break;
    case 'email': 
      if(expressions.email.test(e.target.value)) {
        document.getElementById('email').classList.remove('error');
        document.getElementById('img-email').style.display = 'none';
        document.getElementById('error-email').classList.add('unactive');
        state.email = true;
      } else {
        document.getElementById('email').classList.add('error');
        document.getElementById('img-email').style.display = 'block';
        document.getElementById('error-email').classList.remove('unactive');
        state.email = false;
      }
    break;
    case 'password': 
      if(expressions.password.test(e.target.value)) {
        document.getElementById('password').classList.remove('error');
        document.getElementById('img-password').style.display = 'none';
        document.getElementById('error-password').classList.add('unactive');
        state.password = true;
      } else {
        document.getElementById('password').classList.add('error');
        document.getElementById('img-password').style.display = 'block';
        document.getElementById('error-password').classList.remove('unactive');
        state.password = false;
      }
    break;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validateForm);
  input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {  
  e.preventDefault();
  if (state.name && state.lastname && state.email && state.password) {
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    alert('Registration successful');
} else {

}});