// Filtro do catálogo
const botoes = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card[data-genero]');
botoes.forEach(b => b.addEventListener('click', () => {
    botoes.forEach(x => x.setAttribute('aria-pressed', 'false'));
    b.setAttribute('aria-pressed', 'true');
    const g = b.dataset.filtro;
    cards.forEach(c => { c.hidden = g !== 'todos' && c.dataset.genero !== g; });
}));

// Formulários (apenas demonstração, nada é enviado)
const form = document.querySelector('form');
if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('msg').textContent = 'Mensagem enviada! (demo: nada foi enviado de verdade)';
    form.reset();
});