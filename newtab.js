document.getElementById('search-btn').addEventListener('click', function() {
  const query = document.getElementById('search-query').value;
  if (query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = searchUrl;
  }
});

document.getElementById('images-btn').addEventListener('click', function() {
  window.location.href = 'https://images.google.com';
});

document.getElementById('maps-btn').addEventListener('click', function() {
  window.location.href = 'https://maps.google.com';
});

document.getElementById('news-btn').addEventListener('click', function() {
  window.location.href = 'https://news.google.com';
});
