export function initLegalDialog() {
    const dialog = document.getElementById('legal-dialog');
    const openBtn = document.getElementById('legal');
    const closeBtn = document.getElementById('close-legal');

    if (! (dialog instanceof HTMLDialogElement)
         || ! (openBtn instanceof HTMLButtonElement)
         || ! (closeBtn instanceof HTMLButtonElement)
    ) return;

    openBtn.addEventListener('click', () => {
        if (dialog.open) 
            return;

        dialog.showModal();
        closeBtn.focus();
    });
    closeBtn.addEventListener('click', () => {
        if (dialog.open) dialog.close();
    });
    dialog.addEventListener('click', (e: MouseEvent) => {
        if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
        openBtn.focus();
    });
}

if(document.readyState === 'loading')
    window.addEventListener('DOMContentLoaded', initLegalDialog);
else
    initLegalDialog();