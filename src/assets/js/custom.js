/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
navLinksll = document.querySelectorAll('.nav-item')
menuTogglell = document.getElementById('navbarScroll')
bsCollapsell = new bootstrap.Collapse(menuTogglell)
navLinksll.forEach((l) => {
    l.addEventListener('click', () => { bsCollapsell.toggle() })
})
