let up_button = document.querySelector('.connt1')
let up_button2 = document.querySelector('.connt2')


let number = 55;
up_button.onclick = () => {

    if (number < 90) {
        number += 10
       
    }
    else {
        number = 95;
    }
    if (number === 65 ) {
        document.querySelector('.km_750').innerHTML = '730km'
    }
    if (number === 75 ) {
        document.querySelector('.km_750').innerHTML = '710km'
    }
    if (number === 85 ) {
        document.querySelector('.km_750').innerHTML = '690km'
    }
    if (number === 95 ) {
        document.querySelector('.km_750').innerHTML = '670km'
    }
    if (number === 35 ) {
        document.querySelector('.km_750').innerHTML = '790km'
    }
    if (number === 45 ) {
        document.querySelector('.km_750').innerHTML = '770km'
    }
    if (number === 55 ) {
        document.querySelector('.km_750').innerHTML = '750km'
    }
   
    
    document.querySelector('.mph_speed_p').innerHTML = number
}
up_button2.onclick = () => {
    document.querySelector('.mph_speed_p').innerHTML = number
    if (number > 25) {
        number -= 10
    }
    else {
        number = 25;
    }
    if (number === 65 ) {
        document.querySelector('.km_750').innerHTML = '690km'
    }
    if (number === 75 ) {
        document.querySelector('.km_750').innerHTML = '710km'
    }
    if (number === 85 ) {
        document.querySelector('.km_750').innerHTML = '730km'
    }
    if (number === 95 ) {
        document.querySelector('.km_750').innerHTML = '750km'
    }
    if (number === 45 ) {
        document.querySelector('.km_750').innerHTML = '770km'
    }
    if (number === 35 ) {
        document.querySelector('.km_750').innerHTML = '790km'
    }
    if (number === 25 ) {
        document.querySelector('.km_750').innerHTML = '810km'
    }
  
    

}
let down_button = document.querySelector('.cont1')
let down2_button = document.querySelector('.cont2')
let clim = document.querySelector('.tesla_climate_icon')
let clim2 = document.querySelector('.photo2')
let off2 = document.querySelector('.off')
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
    if (number1 > -15) {
        number1 -= 10
    }
    if (number1 === 10) {
        clim2.src = './img/heat-off.d6b24067.svg'
    }


}
off2.onclick = () => {
   off2.innerHTML = 'ac off'
}


let on = document.querySelector('.toggle-label ')
let off = document.querySelector('.remove')
on.onclick = () => {
    on.classList.add('remove')

}