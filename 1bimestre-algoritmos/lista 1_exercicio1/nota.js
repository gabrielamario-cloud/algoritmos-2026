function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);

    // Verifica se algum campo está vazio
    if (
        document.getElementById("nota1").value === "" ||
        document.getElementById("nota2").value === "" ||
        document.getElementById("nota3").value === "" ||
        document.getElementById("nota4").value === ""
    ) {
        document.getElementById("resultado").innerText = "Preencha todas as notas!";
        return;
    }

    // Verifica se há número negativo
    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        document.getElementById("resultado").innerText = "Não é permitido nota negativa!";
        return;
    }

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    document.getElementById("resultado").innerText = "A média é: " + media.toFixed(2);
}