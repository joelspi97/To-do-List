function closeModal(animationsEnabled, action, optionalAction = undefined) {
    const modal = document.getElementById('modal');
    modal.classList.toggle('modal--dropdown');

    if(animationsEnabled) {
        setTimeout(() => {
            if(optionalAction) {
                optionalAction();
            };
            action();
        }, 500);
    } else {
        if(optionalAction) {
            optionalAction();
        };
        action();
    };
};

export default closeModal;
