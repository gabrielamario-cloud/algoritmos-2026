function calcularArea() {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    // Converter para número
    base = Number(base);
    altura = Number(altura);

    // Verificar se é válido
    if (base < 0 || altura < 0 || base === "" || altura === "") {
        document.getElementById("resultado").innerText = "Digite valores válidos (não negativos).";
        return;
    }

    let area = base * altura;

    document.getElementById("resultado").innerText = "Área = " + area;
}