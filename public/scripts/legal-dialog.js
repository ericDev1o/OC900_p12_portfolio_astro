function initLegalDialog() {
    const dialog = document.querySelector('#legal-dialog');
    const openBtn = document.querySelector('#legal');
    const closeBtn = document.querySelector('#close-legal');

    if (!dialog || !openBtn || !closeBtn) return;

    function openDialog() {
        if (!dialog.open) {
            dialog.showModal();
            closeBtn.focus();
        }
    }

    function closeDialog() {
        if (dialog.open) dialog.close();
    }

    function backDropClose(e) {
        if (e.target === dialog) dialog.close();
    }

    openBtn.addEventListener('click', openDialog);
    closeBtn.addEventListener('click', closeDialog);
    dialog.addEventListener('click', backDropClose);
}

initLegalDialog();
