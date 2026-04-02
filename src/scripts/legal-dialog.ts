function initLegalDialog() {
    const dialog = document.querySelector<HTMLDialogElement>('#legal-dialog');
    const openBtn = document.querySelector<HTMLButtonElement>('#legal');
    const closeBtn = document.querySelector<HTMLButtonElement>('#close-legal');

    if (! (dialog instanceof HTMLDialogElement)
         || ! (openBtn instanceof HTMLButtonElement)
         || ! (closeBtn instanceof HTMLButtonElement)
    ) return;

    openBtn.addEventListener('click', () => {
        if (!dialog.open) {
            dialog.showModal();
            closeBtn.focus();
        }
    });
    closeBtn.addEventListener('click', () => {
        if (dialog.open) dialog.close();
    });
    dialog.addEventListener('click', (e: MouseEvent) => {
        if (e.target === dialog) dialog.close();
    });
}

const openBtn = document.querySelector('#legal');

if( openBtn instanceof HTMLButtonElement) 
    openBtn.addEventListener('click', 
        initLegalDialog, 
        { once: true }
    );