// Función para mostrar el modal
function showModal(image, title, price, description) {
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-description').innerText = description;

    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Mostrar el modal
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Ocultar el modal
}

// Función para enviar a WhatsApp
function sendWhatsApp(productName) {
    const phoneNumber = "50241788164"; // El nuevo número actualizado
    const message = `Hola, estoy interesado en ${productName}.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
