let resetTimeout; // Global timeout holder

function triggerWarning() {
  const alertBox = document.getElementById("alertBox");
  alertBox.className = "alert alert-danger text-center flash-alert";
  alertBox.textContent = "⚠️ WARNING: Earthquake detected! Take cover immediately!";

  const sound = document.getElementById("alertSound");
  sound.play().catch(error => {
    console.error("Audio failed to play:", error);
  });

  clearTimeout(resetTimeout);
  resetTimeout = setTimeout(() => {
    imSafe();
  }, 10000); // 10 seconds
}

function imSafe() {
  const alertBox = document.getElementById("alertBox");
  alertBox.className = "alert alert-success text-center";
  alertBox.textContent = "✅ Status: Marked as Safe. Help others if you can.";
  alert("✅ Thank you. You have marked yourself as safe.");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.toggle('dark-mode'));
  const alertBox = document.getElementById("alertBox");
  alertBox.classList.toggle('dark-mode');
}
