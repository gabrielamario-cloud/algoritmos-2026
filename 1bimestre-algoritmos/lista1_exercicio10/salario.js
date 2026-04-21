 function calcularSalario() {
        const fixo = parseFloat(document.getElementById('salarioFixo').value) || 0;
        const vendas = parseFloat(document.getElementById('valorVendas').value) || 0;

        const taxaComissao = 0.04; // 4%
        const valorComissao = vendas * taxaComissao;
        const totalFinal = fixo + valorComissao;

        document.getElementById('comissao').innerText = formatarMoeda(valorComissao);
        document.getElementById('salarioTotal').innerText = formatarMoeda(totalFinal);
        
        document.getElementById('resultado').style.display = 'block';
    }

    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }