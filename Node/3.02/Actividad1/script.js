function LetraGrande() {
    var elements = document.querySelectorAll('main p');
    elements.forEach(element => {
        element.classList.toggle("letra-grande");
    });
}

function LetraPequeña() {
    var elements = document.querySelectorAll('main p');
    elements.forEach(element => {
        element.classList.toggle("letra-pequeña");
    });
}