function converteCparaF (celsius){
    let fahrenheit = celsius * 1.8 + 32;  
    return fahrenheit;
}  

function converteFparaC (fahrenheit){
    let celsius = (fahrenheit - 32) * 0.5556;
    return celsius;
}

function menu (){
    let escolha = prompt('Qual a conversão desejada digite "1" para converter Celsius para Fahrenheit "2" para converter Fahrenheit para Celsius')  

if (escolha === '1'){
    let celsius = prompt('Digite a temperatura em Celsius (apena números): ');
    let fahrenheit = converteCparaF(celsius);
    alert(celsius + "°C equivalem a " + fahrenheit.toFixed(2) + "°F.");
    } else if (escolha === '2') {
        let fahrenheit = prompt('Digite a temperatura em Fahrenheit (apena números): ');
        let celsius = converteFparaC(fahrenheit);
        alert (fahrenheit + "°F equivalem a " + celsius.toFixed(2) + "°C.");
    } else {
        alert ('Opção Inválida! Tente novamente.')
        menu ();
    }
}

menu ();