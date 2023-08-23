// script.js
function animateText() {
  const wordElement = document.getElementById('word-to-change');
  const cursorElement = document.querySelector('.cursor'); // Cursor element
  const words = ['clever', 'beautiful']; // Add more words if needed
  let currentWordIndex = 0;
  let currentLetterIndex = 0;
  let isDeleting = false;

  function updateText() {
    cursorElement.classList.remove('hidden'); // Show cursor while updating text

    const currentWord = words[currentWordIndex];
    const displayText = isDeleting
      ? currentWord.substring(0, currentLetterIndex - 1)
      : currentWord.substring(0, currentLetterIndex + 1);

    wordElement.textContent = displayText;

    if (isDeleting) {
      currentLetterIndex--;
    } else {
      currentLetterIndex++;
    }

    if (!isDeleting && currentLetterIndex === currentWord.length) {
      isDeleting = true;
      cursorElement.classList.add('hidden'); // Hide cursor while deleting
      setTimeout(updateText, 1000); // Delay before deleting
    } else if (isDeleting && currentLetterIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(updateText, 1500); // Delay before writing new word
    } else {
      setTimeout(updateText, isDeleting ? 50 : 100); // Letter typing speed
    }
  }

  updateText();
}

window.onload = function () {
  animateText();
  setInterval(function () {
    cursorElement.classList.toggle('hidden');
  }, 500);
};
