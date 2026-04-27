function calcularPisos() {
    let comprimento = Number(document.getElementById("comprimento").value);
    let largura = Number(document.getElementById("largura").value);
    let compPiso = Number(document.getElementById("compPiso").value);
    let largPiso = Number(document.getElementById("largPiso").value);

    // Validação
    if (
        comprimento <= 0 || largura <= 0 ||
        compPiso <= 0 || largPiso <= 0
    ) {
        document.getElementById("resultado").innerText =
            "Digite valores válidos (maiores que zero).";
        return;
    }

    // Área do ambiente (m²)
    let areaAmbiente = comprimento * largura;

    // Converter piso de cm² para m²
    let areaPiso = (compPiso / 100) * (largPiso / 100);

    // Quantidade de pisos
    let quantidade = areaAmbiente / areaPiso;

    // Acrescentar 10%
    quantidade = quantidade * 1.10;

    // Arredondar para cima (não pode comprar meio piso)
    quantidade = Math.ceil(quantidade);

    document.getElementById("resultado").innerText =
        "Quantidade de pisos necessária: " + quantidade;
}