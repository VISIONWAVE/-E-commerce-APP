export function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <p>&copy; 2025 E-Commerce App. All rights reserved.</p>
    `;
    return footer;
  }
  