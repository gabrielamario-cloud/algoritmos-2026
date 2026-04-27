function calcular() {
        const x1 = parseFloat(document.getElementById('x1').value);
        const y1 = parseFloat(document.getElementById('y1').value);
        const x2 = parseFloat(document.getElementById('x2').value);
        const y2 = parseFloat(document.getElementById('y2').value);

    
        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
            document.getElementById('resultado').innerText = "Por favor, preencha todos os campos.";
            return;
        }

        
        const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        document.getElementById('resultado').innerText = `A distancia e: ${d.toFixed(2)}`;
    }