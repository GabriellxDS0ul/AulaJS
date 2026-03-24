function Exemplo2()
{
    let fah = Number(document.getElementById("temperatura").value);

    let celsius = (fah - 32) * 5 / 9;

    document.getElementById("resultado").innerHTML = 
        "<p>Temperatura em Fahrenheit: " + fah + "°F</p>" +
        "<p>Temperatura em Celsius: " + celsius.toFixed(2) + "°C</p>";
}