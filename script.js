// Función para mostrar el modal con animación de desvanecimiento
function showModal(image, title, price, description) {
    const modal = document.getElementById('modal');
    
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-description').innerText = description;

    modal.style.display = 'flex';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.transition = 'opacity 0.3s';
        modal.style.opacity = '1';
    }, 10);
}

// Función para cerrar el modal con animación de desvanecimiento
function closeModal() {
    const modal = document.getElementById('modal');
    
    modal.style.transition = 'opacity 0.3s';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Función para enviar a WhatsApp
function sendWhatsApp(productName) {
    const phoneNumber = "50241788164";
    const message = `Hola, estoy interesado en ${productName}.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
