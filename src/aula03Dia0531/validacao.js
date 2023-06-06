const sequencia = '261533';

if (sequencia.length == 6 || sequencia.length == 7) {
    let soma = 0;
    for (let i = 0; i < sequencia.length - 1; i++) soma += parseInt(sequencia[i]) * (i + 2);
    let digitoVerificador = sequencia.length - soma % sequencia.length;
    console.log(`Digito verificador: ${digitoVerificador}`)
    if (digitoVerificador == sequencia[sequencia.length - 1]) console.log('Sequência válida');
    else console.log('Sequência inválida');
} else console.log('Sequência inválida');