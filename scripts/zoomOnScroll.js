const zoomOnScroll = () => {
    let x = 0
    var lastScrollTop = 0;
    const body = document.body


    window.addEventListener("scroll", () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            // scroll down
            x += 1
            body.style.backgroundSize = `${100 + x}% ${100 + x}%`;
        } else {
            // scroll up
            if ((100 + x) > 100) {
                x -= 1
                body.style.backgroundSize = `${100 + x}% ${100 + x}%`;
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
}
export default zoomOnScroll