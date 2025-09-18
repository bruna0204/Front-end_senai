
const $list = document.getElementById('list');
const $error = document.getElementById('error');
const $spinner = document.getElementById('spinner');

const form = document.getElementById("postForm");
const output = document.getElementById("output");

const API = 'https://dummyjson.com'; // API pública de testes


function showError(msg) {
    $error.textContent = msg || '';
}
// Função para exibir os posts
function renderPosts(posts) {
    // innerHTML para modificar o elemento
    // .map le pega uma lista e transforma ela em HTML (ela estava em json)
    // p é como se fosse o name pra cada item da lista igual o for
    $list.innerHTML = posts.products.map(produtos => `
    <div class="card card text-start">
    <div class="card-body">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg><strong class="fw-bold text-primary">${produtos.title}</strong><br>
          </svg><strong class="mb-1"><span class="badge bg-secondary">Categoria:</span></strong> ${produtos.category}<br>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
      <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
      <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
      <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
    </svg><strong>Preço: ${produtos.price}</strong><br>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-data-fill" viewBox="0 0 16 16">
      <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
      <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1"/>
    </svg><strong>Avaliação:</strong>${'★'.repeat(Math.round(produtos.rating))} <br> <!--ranquea usando as estrelas com base no numero -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
      <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
    </svg><strong>Stoque:</strong> ${produtos.stock}<br>
    </div>
    <img src="${produtos.thumbnail}" class="card-image" width="200" height="200">
    <a href="#" class="btn btn-primary w-100 mt-3"> Comprar</a>
    
    </div>
  `).join('');
}
// função assincrona que carrrega os posts
async function getPosts_products() {
    showError('');
    $spinner.style.display = "block"; // mostra spinner
    try {
        const res = await fetch(`${API}/products`);
        if (!res.ok) {
            throw new Error(`Erro HTTP ${res.status}`);
        }
        const data = await res.json();

        renderPosts(data);
    } catch (err) {
        showError(err.message ?? 'Falha ao buscar dados');
    } finally {
        $spinner.style.display = "none"; // sempre esconde no fim
    }
}

// Pega o select do HTML
const $categoryFilter = document.getElementById("categoryFilter");

// Detecta mudança de categoria
$categoryFilter.addEventListener("change", async (e) => {
    const categoria = e.target.value;

    if (!categoria) {
        // Se não escolheu nada, mostra todos
        getPosts_products();
    } else {
        // Se escolheu, busca só daquela categoria
        try {
            $spinner.style.display = "block"; // mostra spinner
            const res = await fetch(`${API}/products/category/${categoria}`);
            const data = await res.json();
            renderPosts(data);
        } catch (err) {
            showError(err.message);
        } finally {
            $spinner.style.display = "none"; // esconde spinner
        }
    }
});



