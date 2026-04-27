function calcular() {
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    b = Number(b);
    c = Number(c);

    // impedir valores negativos
    if (b < 0 || c < 0) {
        document.getElementById("resultado").innerText = "Não pode números negativos!";
        return;
    }

    let h = Math.sqrt(b**2 + c**2);

    document.getElementById("resultado").innerText = "Hipotenusa = " + h.toFixed(2);
}