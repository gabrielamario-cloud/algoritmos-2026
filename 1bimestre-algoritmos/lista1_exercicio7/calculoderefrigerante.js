function calcularLitros() {
    let latas = Number(document.getElementById("latas").value);
    let garrafas600 = Number(document.getElementById("garrafas600").value);
    let garrafas2L = Number(document.getElementById("garrafas2L").value);

    // Validação
    if (
        latas < 0 || garrafas600 < 0 || garrafas2L < 0 ||
        isNaN(latas) || isNaN(garrafas600) || isNaN(garrafas2L)
    ) {
        document.getElementById("resultado").innerText =
            "Digite valores válidos (não negativos).";
        return;
    }

    // Conversão para litros
    let litrosLatas = latas * 0.350;
    let litros600 = garrafas600 * 0.600;
    let litros2L = garrafas2L * 2;

    // Soma total
    let total = litrosLatas + litros600 + litros2L;

    document.getElementById("resultado").innerText =
        "Total de refrigerante: " + total.toFixed(2) + " litros";
}