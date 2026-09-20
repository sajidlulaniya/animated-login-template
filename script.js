(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('#themeToggle');
  const password = document.querySelector('#password');
  const passwordToggle = document.querySelector('#passwordToggle');
  const form = document.querySelector('#loginForm');
  const loginBtn = document.querySelector('#loginBtn');
  const error = document.querySelector('#formError');
  const toast = document.querySelector('#toast');

  document.querySelector('#year').textContent = new Date().getFullYear();
  const savedTheme = localStorage.getItem('nexus-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem('nexus-theme', theme);
    themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  }

  themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  passwordToggle.addEventListener('click', () => {
    const show = password.type === 'password';
    password.type = show ? 'text' : 'password';
    passwordToggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    password.focus();
  });

  document.querySelector('#forgotLink').addEventListener('click', (event) => { event.preventDefault(); error.textContent = 'Connect this link to your password recovery flow.'; });
  document.querySelector('#helpLink').addEventListener('click', (event) => { event.preventDefault(); error.textContent = 'Connect this link to your support or help center.'; });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    error.textContent = '';
    const username = form.username;
    [username, password].forEach(input => input.classList.remove('invalid'));
    if (!username.value.trim()) { username.classList.add('invalid'); error.textContent = 'Please enter your email or username.'; username.focus(); return; }
    if (password.value.length < 6) { password.classList.add('invalid'); error.textContent = 'Password must contain at least 6 characters.'; password.focus(); return; }
    loginBtn.classList.add('loading'); loginBtn.disabled = true; loginBtn.querySelector('.button-label').textContent = 'Signing in…';
    window.setTimeout(() => {
      loginBtn.classList.remove('loading'); loginBtn.disabled = false; loginBtn.querySelector('.button-label').textContent = 'Sign in';
      toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 3500);
    }, 950);
  });
})();
