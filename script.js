var celsius = document.getElementById('celsius');
var fahrenheit = document.getElementById('fahrenheit');

var cel = document.getElementById('cel');
var fah = document.getElementById('fah');

var cel2 = document.getElementById('cel2');
var fah2 = document.getElementById('fah2');

var celsius_content = document.getElementById('hide_show1'); 
var fahrenheit_content = document.getElementById('hide_show2'); 

celsius.addEventListener('input',() => {

    celsius_content.style.display = 'block';
    fahrenheit_content.style.display = 'none';
    let output = ((parseFloat(celsius.value) * 9 / 5) + 32);
    cel.innerText = celsius.value;
    fahrenheit.value = parseFloat(output.toFixed(4));
    fah.innerText = fahrenheit.value;
});
fahrenheit.addEventListener('input',() => {

    fahrenheit_content.style.display = 'block';
    celsius_content.style.display = 'none';
    let output = ((parseFloat(fahrenheit.value) - 32) * 5/9);
    fah2.innerText = fahrenheit.value;
    celsius.value = parseFloat(output.toFixed(4));
    cel2.innerText = celsius.value;
});
