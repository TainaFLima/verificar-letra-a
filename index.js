// Função para contar a ocorrência de 'a' ou 'A' em uma string
function contarOcorrenciasA(str) {
    // Inicializa um contador para as ocorrências
    let contador = 0;

    // Converte a string para minúsculas para simplificar a verificação
    let stringMin = str.toLowerCase();

    // Itera sobre cada caractere da string
    for (let i = 0; i < stringMin.length; i++) {
        // Se o caractere for 'a', incrementa o contador
        if (stringMin[i] === 'a') {
            contador++;
        }
    }

    // Exibe a quantidade de vezes que 'a' aparece na string
    console.log(`A letra 'a' aparece ${contador} vezes na string.`);
}

// Exemplo de uso: a string pode ser modificada ou recebida de outro lugar
const exemploString = "Aprender JavaScript é algo fantástico!";
contarOcorrenciasA(exemploString);
