document.getElementById('colorInput').addEventListener('input', function (e) {
  // get the selected color from the input
  const selectedColor = e.target.value;
  // update the color code from the input
  document.getElementById('colorCode').textContent = selectedColor;
  // update the background color of the display from the input
  document.getElementById('colorDisplay').style.backgroundColor = selectedColor;
});
