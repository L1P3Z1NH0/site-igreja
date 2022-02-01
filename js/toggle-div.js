function hideShowDiv(id) {
    var x = document.getElementById(id);
    if (x.style.display == 'none') {
        x.style.display = 'flex';
    } else {
        x.style.display = 'none';
    }
}

function hideDiv(id){
    var y = document.getElementById(id);
    y.style.display = 'none'
}