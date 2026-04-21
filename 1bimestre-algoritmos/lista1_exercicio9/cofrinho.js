 function calcularTotal() {
        const n1 = parseInt(document.getElementById('m1').value) || 0;
        const n5 = parseInt(document.getElementById('m5').value) || 0;
        const n10 = parseInt(document.getElementById('m10').value) || 0;
        const n25 = parseInt(document.getElementById('m25').value) || 0;
        const n50 = parseInt(document.getElementById('m50').value) || 0;
        const n100 = parseInt(document.getElementById('m100').value) || 0;

        const totalCentavos = (n1 * 1) + (n5 * 5) + (n10 * 10) + (n25 * 25) + (n50 * 50) + (n100 * 100);
        
        const totalReais = totalCentavos / 100;

        document.getElementById('resultado').innerText = 
            "Total: " + totalReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }