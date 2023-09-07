let btns = document.querySelectorAll('button[data-color]')
let img = document.querySelectorAll('.img')

let tesla = {
    "black": "image 1.png",
    "grey": "image 8.png",
    "dark-gre": "image 9.png"
}
btns.forEach(btn => {
    btn.onclick = () => {
        let colors = btn.getAttribute('data-color')
       img.src = tesla[colors]
    }
})
