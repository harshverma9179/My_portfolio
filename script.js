// ✅ Get progress bar once (performance friendly)
const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", updateProgress);
window.addEventListener("resize", updateProgress); // Recalculate on resize

function updateProgress() {

    // Current scroll position
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Total scrollable height
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Prevent division by zero (small pages)
    if (scrollHeight <= 0) {
        progressBar.style.width = "0%";
        return;
    }

    // Calculate percentage
    const progress = (scrollTop / scrollHeight) * 100;

    // Apply width
    progressBar.style.width = progress + "%";
}

// ✅ Run once on page load
updateProgress();
