const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener('keydown', e => {
    //Check if the key is between 0 and 9
    if (e.key >= 0 && e.key <= 9) {
      //First clear the value if there was one there
      codes[index].value = '';
      setTimeout(() => codes[index + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[index - 1].focus(), 10);
    }
  });
});
