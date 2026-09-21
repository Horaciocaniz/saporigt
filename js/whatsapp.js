(function () {
    const WHATSAPP_NUMBER = '50254590273';

    window.SaporiWhatsApp = {
        phoneNumber: WHATSAPP_NUMBER,
        buildMessage: function (productName, price, userText) {
            const text = [
                'Hola, Sapori 👋',
                '',
                'Me interesa este producto:',
                productName,
                'Precio: ' + price,
                '',
                'Mi consulta:',
                userText || 'Me gustaría consultar este producto.',
                '',
                '¡Gracias!'
            ].join('\n');
            return encodeURIComponent(text);
        },
        initProductOrderButton: function (button, product) {
            button.addEventListener('click', function () {
                const dialog = document.getElementById('order-dialog');
                if (!dialog) {
                    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hola, Sapori 👋\nMe interesa ' + product.nombre + '\nPrecio: ' + window.SaporiApp.formatPrice(product.precio));
                    window.open(url, '_blank');
                    return;
                }

                const title = dialog.querySelector('[data-product-name]');
                const price = dialog.querySelector('[data-product-price]');
                const textarea = dialog.querySelector('textarea');

                if (title) title.textContent = product.nombre;
                if (price) price.textContent = window.SaporiApp.formatPrice(product.precio);
                if (textarea) {
                    textarea.value = '';
                    textarea.focus();
                }

                dialog.classList.add('is-visible');
            });
        },
        initContactButtons: function () {
            document.querySelectorAll('[data-whatsapp-contact]').forEach(function (button) {
                button.addEventListener('click', function () {
                    const text = encodeURIComponent('Hola, Sapori 👋\nMe gustaría consultar sus productos.');
                    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text, '_blank');
                });
            });
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        const dialog = document.getElementById('order-dialog');
        if (!dialog) return;

        const closeButton = dialog.querySelector('[data-close-dialog]');
        const continueButton = dialog.querySelector('[data-continue-whatsapp]');
        const textarea = dialog.querySelector('textarea');

        if (closeButton) {
            closeButton.addEventListener('click', function () {
                dialog.classList.remove('is-visible');
            });
        }

        if (continueButton) {
            continueButton.addEventListener('click', function () {
                const productName = dialog.querySelector('[data-product-name]')?.textContent || 'Sapori';
                const priceText = dialog.querySelector('[data-product-price]')?.textContent || 'Consulta';
                const text = window.SaporiWhatsApp.buildMessage(productName, priceText, textarea ? textarea.value.trim() : '');
                window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text, '_blank');
                dialog.classList.remove('is-visible');
            });
        }

        dialog.addEventListener('click', function (event) {
            if (event.target === dialog) {
                dialog.classList.remove('is-visible');
            }
        });
    });
})();
