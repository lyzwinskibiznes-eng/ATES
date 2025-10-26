const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('beziskry-theme');

if (storedTheme) {
    root.setAttribute('data-theme', storedTheme);
}

function updateToggleIcon(theme) {
    if (theme === 'dark') {
        themeToggle.classList.add('is-dark');
    } else {
        themeToggle.classList.remove('is-dark');
    }
}

const initialTheme = root.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
root.setAttribute('data-theme', initialTheme);
updateToggleIcon(initialTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', nextTheme);
        localStorage.setItem('beziskry-theme', nextTheme);
        updateToggleIcon(nextTheme);
    });
}

const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
