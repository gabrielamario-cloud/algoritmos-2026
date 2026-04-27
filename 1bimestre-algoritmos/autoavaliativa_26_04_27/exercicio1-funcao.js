function ehBissexto(ano) {
    if (ano % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exemplo de teste:
const ano = 2024;
console.log(`O ano ${ano} é bissexto? ${ehBissexto(ano)}`);