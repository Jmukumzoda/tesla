let up_button = document.querySelector('.connt1')
let up_button2 = document.querySelector('.connt2')


let number = 55;
up_button.onclick = () => {

    if (number < 70) {
        number += 10
    }
    else {
        number = 75;
    }
    document.querySelector('.mph_speed_p').innerHTML = number
}
up_button2.onclick = () => {
    document.querySelector('.mph_speed_p').innerHTML = number
    if (number > 35) {
        number -= 10
    }
    else {
        number = 35;
    }
}
let down_button = document.querySelector('.cont1')
let down2_button = document.querySelector('.cont2')
let clim = document.querySelector('.tesla_climate_icon')
let clim2 = document.querySelector('.photo2')
let number1 = 20;
down_button.onclick = () => {

    if (number1 < 50) {
        number1 += 10
    }
    else {
        number1 = 50;
    }
    if (number1 === 20) {
        clim2.src = './img/ac-off.7056ea66.svg'
    }
    document.querySelector('.mph_speed_p2').innerHTML = number1
}
down2_button.onclick = () => {
    document.querySelector('.mph_speed_p2').innerHTML = number1
    if (number1 > 15) {
        number1 -= 10
    }
    if (number1 === 10) {
        clim2.src = './img/heat-off.d6b24067.svg'
    }


}
let on = document.querySelector('.toggle-switch')
let off = document.querySelector('.remove')
on.onclick = () => {
    on.classList.add('.remove')
}