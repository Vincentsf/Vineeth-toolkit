const button = document.getElementById('explore-btn');

button?.addEventListener('click', () => {
  const destination = document.getElementById('pathways');
  destination?.scrollIntoView({ behavior: 'smooth' });
});
