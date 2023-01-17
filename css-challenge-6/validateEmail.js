function validate(email) {
  var validate =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validate.test(email);
}

function validateEmail(email) {
  if (validate(email)) {
    document.getElementById('info2').innerHTML = 'Email válido';
  } else {
    document.getElementById('info2').innerHTML = 'Email inválido';
  }
}
