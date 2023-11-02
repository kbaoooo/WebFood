// slide fix menu
const fixMenu = document.querySelector(".fix-menu")
window.onscroll = function() {
    let currentPosi = window.scrollY;
    if(currentPosi > 54) {
        fixMenu.style.transform = "translateY(0)"
    } else {
        fixMenu.style.transform = "translateY(-54px)"
    }
}
