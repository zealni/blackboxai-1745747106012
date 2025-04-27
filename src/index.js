// Entry point for the SPA

import './styles.css';
import Router from './presenters/router.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const router = new Router(app);
  router.init();
});
