const titles = [
    "Full-Stack Developer",
    "Web Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Front-End Developer"
];

const subtitle = document.getElementById('subtitle');
let currentIndex = 0;

function glitchText(newText) {
    subtitle.classList.remove('glitching');
    subtitle.offsetHeight; // Trigger reflow
    subtitle.setAttribute('data-text', newText);
    subtitle.classList.add('glitching');
}

function changeTitle() {
    currentIndex = (currentIndex + 1) % titles.length;
    glitchText(titles[currentIndex]);
}

// Initial glitch
glitchText(titles[0]);

// Start the interval
setInterval(changeTitle, 3000);

// Listen for animation end to remove the glitching class
subtitle.addEventListener('animationend', () => {
    subtitle.classList.remove('glitching');
});