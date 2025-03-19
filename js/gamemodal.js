function openGameModal(url, title, description) {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameFrame');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.project-description');
    
    iframe.src = url;
    modalTitle.textContent = title;
    modalDescription.innerHTML = description; // Changed from textContent to innerHTML
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}