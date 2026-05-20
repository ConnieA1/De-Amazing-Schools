/**
 * De Amazing International Group of Schools
 * Global Responsive Navigation & Core UI Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    // Verify all matching elements exist on the current page layout before mounting listeners
    if (menuBtn && mobileMenu && hamburgerIcon && closeIcon) {
        menuBtn.addEventListener('click', (event) => {
            // Prevent immediate event bubbling or accidental double-trigger actions
            event.stopPropagation();
            
            // Toggle element layout states via Tailwind structural flags
            mobileMenu.classList.toggle('hidden');
            hamburgerIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        // Optimization: Gracefully close the mobile drawer panel if clicking anywhere outside the navigation space
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = menuBtn.contains(event.target);

            if (!mobileMenu.classList.contains('hidden') && !isClickInsideMenu && !isClickOnButton) {
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }
});