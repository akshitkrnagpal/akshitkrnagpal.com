import './src/index.css';
import './src/icons';

const KEYS = ['Space'];

document.addEventListener('keypress', (event) => {
  if (KEYS.includes(event.code)) {
    document.body.classList.toggle('dark-mode');
  }
});
