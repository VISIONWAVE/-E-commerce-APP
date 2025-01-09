import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';

export function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear existing content

  const navbar = Navbar();
  const footer = Footer();

  const mainContent = document.createElement('div');
  mainContent.className = 'container';
  mainContent.innerHTML = `
    <h1>Welcome to Our Store</h1>
    <p>Discover amazing products at unbeatable prices!</p>
  `;

  app.append(navbar, mainContent, footer);
}
