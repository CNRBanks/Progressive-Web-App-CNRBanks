const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// DONE: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // stores the triggered event
    window.deferredPrompt = event;
    // remove hidden class from button
    butInstall.classList.toggle('hidden', false);
});

// DONE: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // display prompts
    promptEvent.prompt();
    // resets the deferred prompt variable
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// DONE: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clear prompts
    window.deferredPrompt = null;
});
