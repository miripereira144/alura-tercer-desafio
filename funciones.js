function calcularIMC(altura, peso) {
    const imc = peso / (altura * altura);
    return imc;
}

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

function convertirDolaresAReales(dolares) {
    const cotizacionDolar = 4.80;
    const reales = dolares * cotizacionDolar;
    return reales;
}

function calcularAreaYPerimetroRectangular(altura, anchura) {
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log("Area: " + area);
    console.log("Perímetro: " + perimetro);
}

function calcularAreaYPerimetroCircular(radio) {
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}

function mostrarTablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}

function calcularIMCHTML() {
    const altura = parseFloat(document.getElementById("alturaIMC").value);
    const peso = parseFloat(document.getElementById("pesoIMC").value);
    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, introduce valores válidos para altura y peso.");
        return;
    }
    const imc = calcularIMC(altura, peso);
    alert(`Tu IMC es ${imc.toFixed(2)}`);
}

function calcularFactorialHTML() {
    const numero = parseInt(document.getElementById("numeroFactorial").value);
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        return;
    }
    const resultado = calcularFactorial(numero);
    alert(`El factorial de ${numero} es ${resultado}`);
}

function convertirDolaresARealesHTML() {
    const dolares = parseFloat(document.getElementById("dolares").value);
    if (isNaN(dolares)) {
        alert("Por favor, introduce un valor válido en dólares.");
        return;
    }
    const reales = convertirDolaresAReales(dolares);
    alert(`${dolares} dólares son R$ ${reales.toFixed(2)}`);
}

function calcularAreaYPerimetroRectangularHTML() {
    const altura = parseFloat(document.getElementById("alturaRectangular").value);
    const anchura = parseFloat(document.getElementById("anchuraRectangular").value);
    if (isNaN(altura) || isNaN(anchura)) {
        alert("Por favor, introduce valores válidos para altura y anchura.");
        return;
    }
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    alert(`Área: ${area} m²\nPerímetro: ${perimetro} m`);
}

function calcularAreaYPerimetroCircularHTML() {
    const radio = parseFloat(document.getElementById("radioCircular").value);
    if (isNaN(radio)) {
        alert("Por favor, introduce un valor válido para el radio.");
        return;
    }
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;
    alert(`Área: ${area} m²\nPerímetro: ${perimetro} m`);
}

function mostrarTablaDeMultiplicarHTML() {
    const numero = parseInt(document.getElementById("numeroTabla").value);
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        return;
    }
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabla += `${numero} x ${i} = ${resultado}\n`;
    }
    alert(tabla);
}
