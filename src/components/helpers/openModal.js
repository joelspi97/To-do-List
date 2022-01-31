function openModal(action) {
    const modal = document.getElementById('modal');
    modal.classList.toggle('modal--dropdown');
    action();
};

export default openModal;
