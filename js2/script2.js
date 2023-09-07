let btns = document.querySelectorAll('button[data-color]')
let img = document.querySelector('img')

let tesla = {
    "black": "./img2/image 1.png",
    "grey": "./img2/image 8.png",
    "dark-gre": "./img2/image 9.png",
}
btns.forEach(btn => {
    btn.onclick = () => {
        let colors = btn.getAttribute('data-color')
        img.src = tesla[colors]
    }
})
