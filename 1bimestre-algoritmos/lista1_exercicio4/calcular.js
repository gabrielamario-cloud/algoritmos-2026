function calcular() {
            const base = document.getElementById('base').value;
            const altura = document.getElementById('altura').value;
            
            if (base === '' || altura === '') {
                alert("Por favor, preencha os dois campos.");
                return;
            }

            const area = parseFloat(base) * parseFloat(altura);

            document.getElementById('resultado').innerText = `A área total é: ${area}`;
        }