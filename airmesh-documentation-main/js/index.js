// Function to detect and set the initial theme
function setInitialTheme() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    } else if (prefersDarkScheme) {
        document.body.classList.add('dark-theme');
    }
}

// Toggle the theme and save user preference
document.addEventListener('dblclick', () => {
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Automatically adjust theme if the system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const isDarkTheme = event.matches;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});
// Prevent default double-tap zoom and enable theme toggle
let lastTapTime = 0;
document.addEventListener('touchstart', (event) => {
    const currentTime = new Date().getTime();
    const tapInterval = currentTime - lastTapTime;

    if (tapInterval < 300 && tapInterval > 0) {
        event.preventDefault(); // Prevent zoom
        toggleTheme(); // Toggle the theme
    }

    lastTapTime = currentTime;
});


// Set the initial theme on page load
setInitialTheme();
