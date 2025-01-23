document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    alert(`Navigating to ${button.textContent}`);
  });
})
