function strongPassword() {
  let password = prompt('enter your password');
  if (password.length > 16) {
    alert('EROR!!! to much simbol');
  } else if (password.length < 8 && password.length > 0) {
    alert('EROR! to low simbol');
  } else if (password.length < 1) {
    alert('EROR! please fill the promt');
  } else {
    alert('your password is strong');
  }
}
strongPassword();
