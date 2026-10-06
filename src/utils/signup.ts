// Shared helper for every "Sign Up" CTA across the site -- the dedicated
// /signup page was retired in favor of a popup (see SignupModal.vue,
// mounted once in App.vue). This just calls the function it exposes on
// window, same pattern as window.openCookiesModal.
export function openSignupModal(): void {
    const win = window as unknown as { openSignupModal?: () => void };
    win.openSignupModal?.();
}
