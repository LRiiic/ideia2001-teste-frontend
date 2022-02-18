function openButton() {
    var menu = document.getElementsByClassName('nav-mobile')[0].style.left = "0";
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
}

function closeButton() {
    var menu = document.getElementsByClassName('nav-mobile')[0].style.left = "-100%";
    document.getElementsByTagName('html')[0].style.overflow = "scroll";
}

function buttonSelect(buttonNumber) {
    if (buttonNumber == 1) {
        console.log('Meus Eventos');
        document.getElementsByClassName('button-1')[0].classList.add('dashboard-button-active');
        document.getElementsByClassName('button-2')[0].classList.remove('dashboard-button-active');
        document.getElementsByClassName('button-3')[0].classList.remove('dashboard-button-active');
    } else if (buttonNumber == 2) {
        console.log('Usuários');
        document.getElementsByClassName('button-2')[0].classList.add('dashboard-button-active');
        document.getElementsByClassName('button-1')[0].classList.remove('dashboard-button-active');
        document.getElementsByClassName('button-3')[0].classList.remove('dashboard-button-active');
    } else if (buttonNumber == 3) {
        console.log('Relatórios');
        document.getElementsByClassName('button-3')[0].classList.add('dashboard-button-active');
        document.getElementsByClassName('button-1')[0].classList.remove('dashboard-button-active');
        document.getElementsByClassName('button-2')[0].classList.remove('dashboard-button-active');
    }
}