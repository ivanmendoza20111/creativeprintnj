// Año footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú (simple: muestra/oculta nav en mobile)
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.gap = '6px';
  nav.style.padding = '10px';
  nav.style.marginBottom = '10px';
  nav.style.borderTop = '1px solid rgba(255,255,255,.10)';
});

// Search drawer
const btnSearch = document.getElementById('btnSearch');
const search = document.getElementById('search');
const searchClose = document.getElementById('searchClose');
const searchGo = document.getElementById('searchGo');
const searchInput = document.getElementById('searchInput');

btnSearch.addEventListener('click', () => {
  search.classList.toggle('is-open');
  if (search.classList.contains('is-open')) searchInput.focus();
});

searchClose.addEventListener('click', () => {
  search.classList.remove('is-open');
});

// Filtro de productos
const chips = document.getElementById('chips');
const products = document.getElementById('products');

chips.addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;

  document.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
  btn.classList.add('is-active');

  const filter = btn.dataset.filter;
  products.querySelectorAll('.product').forEach(card => {
    const type = card.dataset.type;
    card.style.display = (filter === 'all' || type === filter) ? '' : 'none';
  });
});

searchGo.addEventListener('click', () => {
  const q = (searchInput.value || '').trim().toLowerCase();
  products.querySelectorAll('.product').forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = q === '' || text.includes(q) ? '' : 'none';
  });
});
