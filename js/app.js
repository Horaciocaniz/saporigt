(function () {
    window.SaporiApp = {
        formatPrice: function (value) {
            return new Intl.NumberFormat('es-GT', {
                style: 'currency',
                currency: 'GTQ',
                minimumFractionDigits: 2
            }).format(value);
        },
        getCategoryName: function (categoryId) {
            const category = (window.categorias || []).find(function (item) {
                return item.id === categoryId;
            });
            return category ? category.nombre : categoryId;
        },
        initNavigation: function () {
            const navToggle = document.querySelector('.nav-toggle');
            const navMenu = document.querySelector('.nav-menu');
            if (!navToggle || !navMenu) return;

            navToggle.addEventListener('click', function () {
                const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
                navToggle.setAttribute('aria-expanded', String(!isExpanded));
                navMenu.classList.toggle('is-open');
            });

            navMenu.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', function () {
                    navMenu.classList.remove('is-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        },
        initHomeFeaturedProducts: function () {
            const container = document.getElementById('featured-products');
            if (!container || !window.productos) return;

            const featuredProducts = window.productos.filter(function (product) {
                return product.destacado;
            }).slice(0, 4);

            if (!featuredProducts.length) {
                container.innerHTML = '<p class="empty-state">Próximamente tendremos productos destacados.</p>';
                return;
            }

            container.innerHTML = featuredProducts.map(function (product) {
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
                                <p class="mb-0 text-body-secondary">${product.descripcion}</p>
                            </div>
                        </a>
                    </article>
                `;
            }).join('');
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        window.SaporiApp.initNavigation();
        if (document.body.dataset.page === 'home') {
            window.SaporiApp.initHomeFeaturedProducts();
        }
    });
})();
