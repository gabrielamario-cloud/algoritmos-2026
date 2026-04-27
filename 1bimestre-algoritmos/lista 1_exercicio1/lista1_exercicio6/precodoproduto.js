function calcularPreco() {
    let preco = Number(document.getElementById("preco").value);

    // Validação
    if (preco <= 0 || isNaN(preco)) {
        document.getElementById("resultado").innerText =
            "Digite um preço válido (maior que zero).";
        return;
    }

    // Cálculos
    let precoVista = preco * 0.90; // 10% desconto
    let precoPrazo = preco * 1.05; // 5% acréscimo

    document.getElementById("resultado").innerText =
        "Preço à vista (10% desconto): R$ " + precoVista.toFixed(2) +
        "\nPreço a prazo (5% acréscimo): R$ " + precoPrazo.toFixed(2);
}