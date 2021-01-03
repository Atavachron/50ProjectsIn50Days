const labels = document.querySelectorAll('.form-control label');

//Place each letter of each label in a span
labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, index) =>
        //Add inline transition delay style by multiplying the index by the desired delay to get the wave effect
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('');
});
