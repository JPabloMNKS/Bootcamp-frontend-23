function validatePhoneNumber(phone) {
  var phoneRegex = /^\d{7}$|^\d{8}$|^\d{9}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById('info2').innerHTML =
      'Por favor ingrese un número de teléfono válido';
  } else {
    document.getElementById('info2').innerHTML = 'Número de teléfono válido';
  }
}
