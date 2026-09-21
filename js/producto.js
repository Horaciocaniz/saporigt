(function () {
    function getProductIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    function renderNotFound() {
        const container = document.getElementById('product-detail');
        if (!container) return;

        container.innerHTML = `
            <div class="product-detail__empty">
                <h2>Producto no encontrado</h2>
                <p>No pudimos encontrar este producto en nuestro catálogo.</p>
                <a class="button button--primary" href="catalogo.html">Volver al catálogo</a>
            </div>
        `;
    }

    function renderProduct(product) {
        const container = document.getElementById('product-detail');
        if (!container) return;

        const orderButton = product.disponible
            ? '<button class="button button--primary" type="button" data-order-button>Quiero pedirlo</button>'
            : '<span class="status-badge status-badge--offline">NO DISPONIBLE</span>';

        container.innerHTML = `
            <article class="product-detail">
                <div class="product-detail__media">
                    <img src="${product.imagen}" alt="${product.nombre}" />
                </div>
                <div class="product-detail__content">
                    <div class="product-detail__eyebrow">${window.SaporiApp.getCategoryName(product.categoria)}</div>
                    <h1>${product.nombre}</h1>
                    <p class="product-detail__price">${window.SaporiApp.formatPrice(product.precio)}</p>
                    <span class="status-badge ${product.disponible ? 'status-badge--online' : 'status-badge--offline'}">${product.disponible ? 'Disponible' : 'No disponible'}</span>
                    <p class="product-detail__description">${product.descripcion}</p>
                    <div class="product-detail__actions">
                        ${orderButton}
                        <a class="button button--secondary" href="catalogo.html">Volver al catálogo</a>
                    </div>
                </div>
            </article>
        `;

        const button = document.querySelector('[data-order-button]');
        if (button && window.SaporiWhatsApp && typeof window.SaporiWhatsApp.initProductOrderButton === 'function') {
            window.SaporiWhatsApp.initProductOrderButton(button, product);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        if (document.body.dataset.page !== 'producto') return;

        const productId = getProductIdFromUrl();
        const product = (window.productos || []).find(function (item) {
            return item.id === productId;
        });

        if (!product) {
            renderNotFound();
            return;
        }

        renderProduct(product);
    });
})();
