(function () {
    function getSelectedCategory() {
        const params = new URLSearchParams(window.location.search);
        return params.get('categoria');
    }

    function renderFilters(selectedCategory) {
        const filtersContainer = document.getElementById('catalog-filters');
        if (!filtersContainer) return;

        const filterOptions = [{ id: 'todos', nombre: 'Todos' }].concat(window.categorias || []);

        filtersContainer.innerHTML = filterOptions.map(function (category) {
            const isActive = selectedCategory === category.id || (!selectedCategory && category.id === 'todos');
            const href = category.id === 'todos' ? 'catalogo.html' : 'catalogo.html?categoria=' + category.id;
            return '<a class="filter-chip ' + (isActive ? 'is-active' : '') + '" href="' + href + '">' + category.nombre + '</a>';
        }).join('');
    }

    function createCard(product) {
        return `
            <article class="product-card card h-100 border-0 shadow-sm">
                <a href="producto.html?id=${product.id}" class="product-card__link text-decoration-none" aria-label="Ver producto ${product.nombre}">
                    <img src="${product.imagen}" alt="${product.nombre}" loading="lazy" class="card-img-top" />
                    <div class="card-body p-3">
                        <div class="d-flex justify-content-between align-items-center gap-2 mb-2">
                            <span class="small text-uppercase fw-semibold text-body-secondary">${window.SaporiApp.getCategoryName(product.categoria)}</span>
                            <span class="badge rounded-pill ${product.disponible ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}">${product.disponible ? 'Disponible' : 'No disponible'}</span>
                        </div>
                        <h3 class="h5 mb-2 text-dark">${product.nombre}</h3>
                        <p class="product-card__price mb-2">${window.SaporiApp.formatPrice(product.precio)}</p>
                        <p class="mb-2 text-body-secondary">${product.descripcion}</p>
                        <div class="product-card__cta-row mt-3">
                            <span class="btn btn-outline-primary btn-sm rounded-pill">Ver producto</span>
                            ${product.disponible ? '<span class="btn btn-primary btn-sm rounded-pill">Quiero pedirlo</span>' : '<span class="btn btn-secondary btn-sm rounded-pill disabled">No disponible</span>'}
                        </div>
                    </div>
                </a>
            </article>
        `;
    }

    function renderProducts(selectedCategory) {
        const productsContainer = document.getElementById('catalog-products');
        if (!productsContainer) return;

        let filteredProducts = window.productos;
        if (selectedCategory && selectedCategory !== 'todos') {
            filteredProducts = window.productos.filter(function (product) {
                return product.categoria === selectedCategory;
            });
        }

        if (!filteredProducts.length) {
            productsContainer.innerHTML = '<p class="empty-state">No hay productos disponibles en esta categoría por el momento.</p>';
            return;
        }

        productsContainer.innerHTML = filteredProducts.map(createCard).join('');
    }

    document.addEventListener('DOMContentLoaded', function () {
        if (document.body.dataset.page !== 'catalogo') return;

        const selectedCategory = getSelectedCategory() || 'todos';
        renderFilters(selectedCategory);
        renderProducts(selectedCategory);
    });
})();
