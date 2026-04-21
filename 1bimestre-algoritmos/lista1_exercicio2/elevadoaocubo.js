function calcularCubo() {
    let valor = document.getElementById("numero").value;

    // Verifica se está vazio
    if (valor === "") {
        document.getElementById("resultado").innerText = "Digite um número!";
        return;
    }

    let numero = Number(valor);

    // Verifica se é negativo
    if (numero < 0) {
        document.getElementById("resultado").innerText = "Não é permitido número negativo!";
        return;
    }

    let cubo = numero * numero * numero;

    document.getElementById("resultado").innerText = "Resultado: " + cubo;
}