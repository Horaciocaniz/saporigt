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
            <article class="product-card">
                <a href="producto.html?id=${product.id}" class="product-card__link" aria-label="Ver producto ${product.nombre}">
                    <img src="${product.imagen}" alt="${product.nombre}" loading="lazy" />
                    <div class="product-card__body">
                        <div class="product-card__meta">
                            <span>${window.SaporiApp.getCategoryName(product.categoria)}</span>
                            <span class="product-card__status ${product.disponible ? 'is-available' : 'is-unavailable'}">${product.disponible ? 'Disponible' : 'No disponible'}</span>
                        </div>
                        <h3>${product.nombre}</h3>
                        <p class="product-card__price">${window.SaporiApp.formatPrice(product.precio)}</p>
                        <p>${product.descripcion}</p>
                        <div class="product-card__cta-row">
                            <span class="button button--secondary">Ver producto</span>
                            ${product.disponible ? '<span class="button button--primary">Quiero pedirlo</span>' : '<span class="button button--ghost" aria-disabled="true">No disponible</span>'}
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
