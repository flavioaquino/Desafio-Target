function verificarLetraA(str) {
    let count = 0;
    for (let char of str) {
        if (char.toLowerCase() === 'a') {
            count++;
        }
    }
    if (count > 0) {
        console.log(`A letra "a" aparece ${count} vezes na string.`);
    } else {
        console.log('A letra "a" não aparece na string.');
    }
}

let minhaString = 'Testar string 123 com AaA';
verificarLetraA(minhaString);