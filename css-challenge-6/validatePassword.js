function validatePassword(password) {
  if (password.length < 8) {
    document.getElementById('info2').innerHTML =
      ' La contraseña debe tener al menos 8 caracteres ';
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    document.getElementById('info2').innerHTML =
      'La contraseña debe tener al menos una letra mayúscula';
    return false;
  }
  if (!/[a-z]/.test(password)) {
    document.getElementById('info2').innerHTML =
      'La contraseña debe tener al menos una letra minúscula';
    return false;
  }
  if (!/\d/.test(password)) {
    document.getElementById('info2').innerHTML =
      'La contraseña debe tener al menos un dígito';
    return false;
  } else {
    document.getElementById('info2').innerHTML = '';
    return true;
  }
}
